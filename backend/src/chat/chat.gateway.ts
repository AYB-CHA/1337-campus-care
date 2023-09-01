import { JwtService } from '@nestjs/jwt';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { User } from '@prisma/client';
import { Socket, Server } from 'socket.io';
import { UsersService } from 'src/users/users.service';
import { ChatService } from './chat.service';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UsersService,
    private readonly chatService: ChatService,
  ) {}

  async handleConnection(client: Socket) {
    try {
      const payload = await this.getUserPayload(client);
      const user = await this.userService.findOne(payload.username);
      if (payload.type != 'Bearer' || !user) throw Error();
    } catch (error) {
      client.disconnect();
    }
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
    let { id } = await this.getUserPayload(client);
    let message = await this.chatService.newTicketMessage(
      data.message,
      data.ticket_id,
      id,
    );
    this.server.emit('new thread message', message);
  }

  async getUserPayload(client: Socket) {
    const [type, token] =
      client.handshake.headers.authorization?.split(' ') ?? [];
    return { ...(await this.jwt.verifyAsync(token)), type };
  }
}
