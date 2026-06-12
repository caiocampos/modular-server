import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { moduleList } from './modules-expose';
import { ScheduleModule } from '@nestjs/schedule';
import { CheckServicesModule } from './modules/check-services/check-services.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    CheckServicesModule,
    ...moduleList,
  ],
})
export class AppModule {}
