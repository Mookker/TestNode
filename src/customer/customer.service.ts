import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Cache } from 'cache-manager';
import { Guid } from "guid-typescript";
import { Customer } from './entities/customer.entity';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private repository: CustomerRepository) {

  }
  async create(createCustomerDto: CreateCustomerDto) {
    await this.repository.create(createCustomerDto);
    await this.cacheManager.set(
      createCustomerDto.id.toString(),
      JSON.stringify(createCustomerDto),
    );
  }

  findAll() {
    return `This action returns all customer`;
  }

  async findOne(id: Guid): Promise<Customer> {
    const cache = await this.cacheManager.get(id.toString());
    if (cache) {
      return JSON.parse(cache.toString());
    }

    return await this.repository.findOne(id);
  }

  async update(id: Guid, updateCustomerDto: UpdateCustomerDto) {

    await this.repository.update(id, updateCustomerDto);
    await this.cacheManager.set(
      updateCustomerDto.id.toString(),
      JSON.stringify(updateCustomerDto),
    );
  }

  remove(id: Guid) {
    return `This action removes a #${id} customer`;
  }
}
