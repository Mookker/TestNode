import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UpdatePriceCommandHandler } from './commands/handlers/update-price.command-handler';
import { InventoryItemRepository } from './inventory-item.repository';
import { InventoryItemsResolver } from './inventory-item.resolver';
import { GetOrderItemsQueryHandler } from './queries/handlers/get-order-items.query-handler';

@Module({
  imports: [CqrsModule],
  providers: [
    InventoryItemRepository,
    GetOrderItemsQueryHandler,
    UpdatePriceCommandHandler,
    InventoryItemsResolver,
  ],
})
export class InventoryItemModule {}
