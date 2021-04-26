import { Injectable } from '@nestjs/common';
import { InventoryItem } from '../graphql';

@Injectable()
export class InventoryItemRepository {
  private readonly items: InventoryItem[] = [
    { id: '1', name: 'Item #1', price: 100, orderId: '1' },
    { id: '2', name: 'Item #2', price: 100, orderId: '2' },
    { id: '3', name: 'Item #3', price: 100, orderId: '1' },
  ];
  findByInventoryOrder(
    orderId: string,
  ): InventoryItem[] | PromiseLike<InventoryItem[]> {
    return this.items.filter((item) => item.orderId == orderId);
  }

  updatePrice(
    itemId: string,
    newPrice: number,
  ): InventoryItem | Promise<InventoryItem> {
    const item = this.items.find((item) => item.id == itemId);
    if (item) {
      item.price = newPrice;
      return item;
    }
    throw `Item ${itemId} not found`;
  }
}
