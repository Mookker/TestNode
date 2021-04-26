import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { CustomerModule } from './customer.module';
import { CustomerRepository } from './customer.repository';


describe('CustomerService', () => {
  let service: CustomerService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerService, CustomerRepository],
      imports: [CustomerModule]
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
