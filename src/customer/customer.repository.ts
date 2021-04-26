import { DynamoDBClient, GetItemCommand, PutItemCommand, QueryCommand } from '@aws-sdk/client-dynamodb';
import { fromIni } from '@aws-sdk/credential-provider-ini';
import { Guid } from 'guid-typescript';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
export class CustomerRepository {
  private client: DynamoDBClient;
  readonly TABLE_NAME = 'Customers';

    constructor() {
        const REGION = 'us-east-2'
        this.client = new DynamoDBClient({
          region: REGION,
          credentials: fromIni({ profile: 'Mookker' }),
        });
    }
    async create(createCustomerDto: CreateCustomerDto) {
        try {
            const params = {
                TableName: this.TABLE_NAME,
                Item: {
                    Customer_Id: { S: Guid.create().toString() },
                    Last_Name: { S: createCustomerDto.name },
                },
            };
            await this.client.send(new PutItemCommand(params));
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    async findOne(id: Guid): Promise<Customer> {
        const params = {
            KeyConditionExpression: "Customer_Id = :s",
            ExpressionAttributeValues: {
                ":s": { S: id.toString() }
            },
            ProjectionExpression: "Customer_Id, Last_Name",
            TableName: this.TABLE_NAME,
        };
          
        try {
            // Create DynamoDB service object
            let data = await this.client.send(new QueryCommand(params));
            const id = data.Items[0].Customer_Id.S;
            const lastName = data.Items[0].Last_Name.S;
            const customer: Customer = { id: id, name: lastName };
            return customer;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async update(id: Guid, updateCustomerDto: UpdateCustomerDto) {
        try {
            const params = {
                TableName: this.TABLE_NAME,
                Item: {
                    Last_Name: { S: updateCustomerDto.name },
                },
            };
            await this.client.send(new PutItemCommand(params));
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}
