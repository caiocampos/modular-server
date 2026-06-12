import { Module } from '@nestjs/common';
import { CheckServicesService } from './check-services.service';

@Module({
  providers: [CheckServicesService],
  exports: [],
})
export class CheckServicesModule {}
