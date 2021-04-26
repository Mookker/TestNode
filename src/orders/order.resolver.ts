import { QueryBus } from "@nestjs/cqrs";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { InventoryItem, Order } from "src/graphql";
import { GetOrderItemsQuery } from "src/inventory-item/queries/get-order-items.query";
import { GetOrdersQuery } from "./queries/gets-orders.query";
import { GetOrderQuery } from "./queries/get-order.query";


@Resolver('Order')
export class OrderResolver {
    constructor(private queryBus: QueryBus) {}
    @Query()
    async order(@Args('id') id: string): Promise<Order> {
        return this.queryBus.execute<Order>(new GetOrderQuery(id));
    }

    @Query()
    async orders(): Promise<Order[]> {
        return this.queryBus.execute(new GetOrdersQuery());
}
    
    @ResolveField()
    async inventoryItems(@Parent() order: Order): Promise<InventoryItem[]> {
        return this.queryBus.execute(new GetOrderItemsQuery(order.id));
    }
}