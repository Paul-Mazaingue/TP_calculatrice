import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccessModule } from './success/success.module';
import { ErrorModule } from './error/error.module';

@Module({
  imports: [SuccessModule, ErrorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
