import { Module } from '@nestjs/common';
import { StaffInfraController } from './staff-infra.controller';
import { StaffInfraService } from './staff-infra.service';

@Module({
  controllers: [StaffInfraController],
  providers: [StaffInfraService],
})
export class StaffInfraModule {}
