import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InventoryItem } from "src/graphql";
import { InventoryItemRepository } from "src/inventory-item/inventory-item.repository";
import { UpdatePriceCommand } from "../update-price.command";

@CommandHandler(UpdatePriceCommand)
export class UpdatePriceCommandHandler implements ICommandHandler<UpdatePriceCommand, InventoryItem>{
    constructor(private repository: InventoryItemRepository) {}
    async execute(command: UpdatePriceCommand): Promise<InventoryItem> {
        return this.repository.updatePrice(command.itemId, command.newPrice);
    }

}