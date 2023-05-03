import { Controller } from '@nestjs/common';

@Controller('success')
export class SuccessController {
  constructor(private readonly successService: SuccessService) {}

  @Post()
  createSuccess(@Body('timeTakenMs') timeTakenMs: number): Promise<Success> {
    return this.successService.createSuccess(timeTakenMs);
  }

  @Get()
  async getStats(): Promise<any> {
    return await this.successService.getStats();
  }
}