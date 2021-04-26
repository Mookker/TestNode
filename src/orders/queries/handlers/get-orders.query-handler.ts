import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Order } from "src/graphql";
import { OrderRepository } from "src/orders/order.repository";
import { GetOrdersQuery } from "../gets-orders.query";

@QueryHandler(GetOrdersQuery)
export class GetOrdersQueryHandler implements IQueryHandler<GetOrdersQuery, Order[]> {
    constructor(private orderRepository: OrderRepository) {}
    async execute(query: GetOrdersQuery): Promise<Order[]> {
        return this.orderRepository.findAll();
    }
    
} 