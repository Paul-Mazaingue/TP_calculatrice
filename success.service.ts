import { Injectable } from '@nestjs/common';

@Injectable()
export class SuccessService {
  constructor(
    @InjectRepository(Success)
    private successRepository: Repository<Success>,
  ) {}

  async createSuccess(timeTakenMs: number): Promise<Success> {
    const success = new Success();
    success.timeTakenMs = timeTakenMs;
    await success.save();
    return success;
  }

  async getStats(): Promise<any> {
    const allSuccesses = await this.successRepository.find();
    // Calculate stats
    return stats;
  }
}