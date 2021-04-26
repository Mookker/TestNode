import { Module } from '@nestjs/common';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import { InventoryItemModule } from 'src/inventory-item/inventory-item.module';
import { OrderRepository } from './order.repository';
import { OrderResolver } from './order.resolver';
import { GetOrderQueryHandler } from './queries/handlers/get-order.query-handler';
import { GetOrdersQueryHandler } from './queries/handlers/get-orders.query-handler';
export const CommandHandlers = [GetOrderQueryHandler, GetOrdersQueryHandler];
@Module({
  providers: [OrderResolver, OrderRepository, ...CommandHandlers],
  imports: [CqrsModule, InventoryItemModule],
})
export class OrderModule {}
