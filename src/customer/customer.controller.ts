import { Controller, Post, Body, Get, Param, Put, Delete, ParseUUIDPipe } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto): Promise<any> {
    return await this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe())id: Guid): Promise<Customer> {
    return await this.customerService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: Guid,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return await this.customerService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: Guid) {
    return this.customerService.remove(id);
  }
}
