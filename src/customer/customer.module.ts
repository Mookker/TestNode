import { CacheModule, Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './customer.repository';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
  imports: [CacheModule.register()],
  exports: [CacheModule]
})
export class CustomerModule {}
