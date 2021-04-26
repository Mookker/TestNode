import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Order } from "src/graphql";
import { OrderRepository } from "src/orders/order.repository";
import { GetOrderQuery } from "../get-order.query";

@QueryHandler(GetOrderQuery)
export class GetOrderQueryHandler implements IQueryHandler<GetOrderQuery, Order> {
    constructor(private orderRepository: OrderRepository) {}
    async execute(query: GetOrderQuery): Promise<Order> {
        return this.orderRepository.findOne(query.id);
    }
    
} 