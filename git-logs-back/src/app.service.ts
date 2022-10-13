import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Wasdorld!';
  }
  create() {
    return { text: 'This action adds a new cat' };
  }
}
