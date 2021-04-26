import { CustomerRepository } from './customer.repository';

describe('CustomerRepository', () => {
  it('should be defined', () => {
    expect(new CustomerRepository()).toBeDefined();
  });
});
