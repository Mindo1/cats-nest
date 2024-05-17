import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    const count = this.cats.push(cat);
    console.log(`count: ${count}`);
    return this.cats;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
