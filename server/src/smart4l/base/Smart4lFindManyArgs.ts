/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Smart4lWhereInput } from "./Smart4lWhereInput";
import { Type } from "class-transformer";
import { Smart4lOrderByInput } from "./Smart4lOrderByInput";

@ArgsType()
class Smart4lFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => Smart4lWhereInput,
  })
  @Field(() => Smart4lWhereInput, { nullable: true })
  @Type(() => Smart4lWhereInput)
  where?: Smart4lWhereInput;

  @ApiProperty({
    required: false,
    type: [Smart4lOrderByInput],
  })
  @Field(() => [Smart4lOrderByInput], { nullable: true })
  @Type(() => Smart4lOrderByInput)
  orderBy?: Array<Smart4lOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { Smart4lFindManyArgs };
