import { Injectable } from '@nestjs/common';

@Injectable()
export class ErrorService {
  constructor(
    @InjectRepository(ErrorEvent)
    private errorRepository: Repository<ErrorEvent>,
  ) {}

  async createError(): Promise<ErrorEvent> {
    const errorEvent = new ErrorEvent();
    await errorEvent.save();
    return errorEvent;
  }

  async getStats(): Promise<any> {
    const allErrors = await this.errorRepository.find();
    // Calculate stats
    return stats;
  }
}