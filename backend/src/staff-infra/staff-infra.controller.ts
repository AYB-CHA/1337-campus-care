import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { StaffInfraService } from './staff-infra.service';
import { AuthGuard } from 'src/auth/auth.gaurd';
import { staffInfraTicketDto } from './staff-infra-dto';
import { Request } from 'express';
import { User } from '@prisma/client';

@Controller('staff-infra')
export class StaffInfraController {
  constructor(private readonly staffInfraService: StaffInfraService) {}

  @UseGuards(AuthGuard)
  @Get('/')
  async all() {
    return await this.staffInfraService.getAllTickets();
  }

  @Post('/')
  @UseGuards(AuthGuard)
  async store(
    @Body() ticket: staffInfraTicketDto,
    @Req() request: Request & { user: User },
  ) {
    return this.staffInfraService.addNewTicket(
      ticket.title,
      ticket.description,
      ticket?.image,
      request.user.id,
    );
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  async delete(
    @Param('id') id: string,
    @Req() request: Request & { user: User },
  ) {
    await this.staffInfraService.deleteForUser(id, request.user.id);
    return 'deleted';
  }
}
