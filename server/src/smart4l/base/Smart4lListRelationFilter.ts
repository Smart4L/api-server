/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Smart4lWhereInput } from "./Smart4lWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Smart4lListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Smart4lWhereInput,
  })
  @ValidateNested()
  @Type(() => Smart4lWhereInput)
  @IsOptional()
  @Field(() => Smart4lWhereInput, {
    nullable: true,
  })
  every?: Smart4lWhereInput;

  @ApiProperty({
    required: false,
    type: () => Smart4lWhereInput,
  })
  @ValidateNested()
  @Type(() => Smart4lWhereInput)
  @IsOptional()
  @Field(() => Smart4lWhereInput, {
    nullable: true,
  })
  some?: Smart4lWhereInput;

  @ApiProperty({
    required: false,
    type: () => Smart4lWhereInput,
  })
  @ValidateNested()
  @Type(() => Smart4lWhereInput)
  @IsOptional()
  @Field(() => Smart4lWhereInput, {
    nullable: true,
  })
  none?: Smart4lWhereInput;
}
export { Smart4lListRelationFilter };
