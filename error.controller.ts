import { Controller } from '@nestjs/common';

@Controller('error')
export class ErrorController {
  constructor(private readonly errorService: ErrorService) {}

  @Post()
  createError(): Promise<ErrorEvent> {
    return this.errorService.createError();
  }

  @Get()
  async getStats(): Promise<any> {
    return await this.errorService.getStats();
  }
}