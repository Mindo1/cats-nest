import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    // เงื่อนไขนี้คือ validate ผ่าน
    // @metatype คือมี ช่ือ class ที่ส่งเข้ามามั้ย
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const error = await validate(object);
    if (error.length > 0) {
      throw new BadRequestException('Validation Failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const type: Function[] = [String, Boolean, Number, Array, Object];
    // เช็คว่า type ของที่ request ส่งมาตรงกับ model รับรึป่าว
    return !type.includes(metatype);
  }
}
