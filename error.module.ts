import { Module } from '@nestjs/common';
import { ErrorController } from './error.controller';
import { ErrorService } from './error.service';

@Module({
  imports: [TypeOrmModule.forFeature([ErrorEvent])],
  controllers: [ErrorController],
  providers: [ErrorService],
})
export class ErrorModule {}