import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InventoryItem } from "src/graphql";
import { InventoryItemRepository } from "src/inventory-item/inventory-item.repository";
import { GetOrderItemsQuery } from "../get-order-items.query";

@QueryHandler(GetOrderItemsQuery)
export class GetOrderItemsQueryHandler implements IQueryHandler<GetOrderItemsQuery, InventoryItem[]> {
    constructor(private inventoryItemRepository: InventoryItemRepository) {}
    async execute(query: GetOrderItemsQuery): Promise<InventoryItem[]> {
        return this.inventoryItemRepository.findByInventoryOrder(query.orderId);
    }
    
}

