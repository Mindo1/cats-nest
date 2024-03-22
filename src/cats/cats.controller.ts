import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { ValidationPipe } from 'src/validation/validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post('')
  @UsePipes(ValidationPipe)
  create(@Body() createCatDto: CreateCatDto): Cat {
    this.catsService.create(createCatDto);
    return createCatDto;
  }
}
