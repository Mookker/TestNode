import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './orders/order.module';
import { InventoryItemModule } from './inventory-item/inventory-item.module';

@Module({
  imports: [CustomerModule, OrderModule, GraphQLModule.forRoot({ typePaths: ['./**/*.graphql'], 
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class',
    },
  })]
})
export class AppModule {}
