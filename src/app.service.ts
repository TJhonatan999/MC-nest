import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  onServe(): string {
    return 'This server is runing';
  }
}
