/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { Smart4lCreateInput } from "./Smart4lCreateInput";

@ArgsType()
class CreateSmart4lArgs {
  @Field(() => Smart4lCreateInput, { nullable: false })
  data!: Smart4lCreateInput;
}

export { CreateSmart4lArgs };
