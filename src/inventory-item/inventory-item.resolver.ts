import { CommandBus } from "@nestjs/cqrs";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { InventoryItem } from "src/graphql";
import { UpdatePriceCommand } from "./commands/update-price.command";

@Resolver('InventoryItem')
export class InventoryItemsResolver {
    constructor(private readonly commandBus: CommandBus) { }
    
    @Mutation()
    async updatePrice(@Args('itemId') itemId: string, @Args('newPrice') newPrice: number): Promise<InventoryItem> {
        return this.commandBus.execute(new UpdatePriceCommand(itemId, newPrice));
    }
}