
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InventoryItem {
    id: string;
    name: string;
    price: number;
    orderId: string;
}

export abstract class IMutation {
    abstract updatePrice(itemId: string, newPrice: number): InventoryItem | Promise<InventoryItem>;
}

export class Order {
    id?: string;
    name?: string;
    inventoryItems?: InventoryItem[];
}

export abstract class IQuery {
    abstract order(id?: string): Order | Promise<Order>;

    abstract orders(): Order[] | Promise<Order[]>;
}
