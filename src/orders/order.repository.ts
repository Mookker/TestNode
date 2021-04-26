import { Injectable } from '@nestjs/common';
import { Order } from '../graphql';

@Injectable()
export class OrderRepository {
  private readonly orders: Order[] = [
    { id: '1', name: 'Order #1' },
    { id: '2', name: 'Order #2' },
    { id: '3', name: 'Order #3' },
  ];

  findOne(id: string): Order | PromiseLike<Order> {
    return this.orders.find((order) => order.id == id);
  }
  findAll(): Order[] | PromiseLike<Order[]> {
    return this.orders;
  }
}
