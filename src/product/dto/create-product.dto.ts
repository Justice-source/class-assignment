import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
@IsNumber()
public id: number

  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public name: string;

  // Gets only validated if it's part of the request's body
  @IsString()
  @IsNotEmpty()
  public desc: string;

  // Validates for an integer
  @IsNumber()
  public price: number;
}