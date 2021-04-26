import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';
import { CustomerModule } from './customer.module';
import { CustomerRepository } from './customer.repository';
import { CustomerService } from './customer.service';

describe('CustomerController', () => {
  let controller: CustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService, CustomerRepository],
      imports: [CustomerModule]
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
