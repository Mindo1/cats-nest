import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  it('should be defined service', () => {
    expect(service).toBeDefined();
  });

  it('should be create new cat', () => {
    const input = {
      name: 'hoo',
      age: 1,
      breed: 'm',
    };

    const expected = [
      {
        name: 'hoo',
        age: 1,
        breed: 'm',
      } as Cat
    ];

    jest.spyOn(service, 'create');
    const result = service.create(input);
    expect(service.create).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it('should be get []', () => {
    const expected = [];
    jest.spyOn(service, 'findAll'); // mock service ที่อยากเรียก มี parameter ( <name_service> + <name_function_in_service> )
    const result = service.findAll(); // call service
    expect(service.findAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });
});
