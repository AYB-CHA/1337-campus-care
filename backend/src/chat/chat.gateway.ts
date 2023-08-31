import { JwtService } from '@nestjs/jwt';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { User } from '@prisma/client';
import { Socket } from 'socket.io';
import { UsersService } from 'src/users/users.service';
import { ChatService } from './chat.service';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection {
  user: User | null;
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UsersService,
    private readonly chatService: ChatService,
  ) {}

  async handleConnection(client: Socket) {
    const [type, token] =
      client.handshake.headers.authorization?.split(' ') ?? [];
    const payload = await this.jwt.verifyAsync(token);
    this.user = await this.userService.findOne(payload.username);
    if (type != 'Bearer' || !this.user) client.disconnect();
  }

  // now we will work only on the staff ticket.
  @SubscribeMessage('thread init')
  async threadInit(
    @MessageBody() data: { ticket_id: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.emit(
      'thread init',
      await this.chatService.getStaffTicketMessages(data.ticket_id),
    );
  }

  @SubscribeMessage('new thread message')
  async newThreadMessage(
    @MessageBody() data: { ticket_id: string; message: string },
    @ConnectedSocket() client: Socket,
  ) {
    return await this.chatService.newTicketMessage(
      data.message,
      data.ticket_id,
      this.user.id,
    );
  }
}
