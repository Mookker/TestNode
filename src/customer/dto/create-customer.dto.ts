import { Guid } from "guid-typescript";
import {IsString, IsUUID} from 'class-validator'
export class CreateCustomerDto {
  @IsUUID()
  id: Guid;
  
  @IsString()
  name: string;
}
