import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getHello(): string {
        return 'Hello User!'
      }

      getHello2(): string {
        return 'Hello User again!'
      }
}
