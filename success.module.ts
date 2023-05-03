import { Module } from '@nestjs/common';
import { SuccessController } from './success.controller';
import { SuccessService } from './success.service';


@Module({
  imports: [TypeOrmModule.forFeature([Success])],
  controllers: [SuccessController],
  providers: [SuccessService],
})
export class SuccessModule {}

