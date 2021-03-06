/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateSmart4lArgs } from "./CreateSmart4lArgs";
import { UpdateSmart4lArgs } from "./UpdateSmart4lArgs";
import { DeleteSmart4lArgs } from "./DeleteSmart4lArgs";
import { Smart4lFindManyArgs } from "./Smart4lFindManyArgs";
import { Smart4lFindUniqueArgs } from "./Smart4lFindUniqueArgs";
import { Smart4l } from "./Smart4l";
import { Smart4lService } from "../smart4l.service";

@graphql.Resolver(() => Smart4l)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class Smart4lResolverBase {
  constructor(
    protected readonly service: Smart4lService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Smart4l",
    action: "read",
    possession: "any",
  })
  async _smart4lsMeta(
    @graphql.Args() args: Smart4lFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Smart4l])
  @nestAccessControl.UseRoles({
    resource: "Smart4l",
    action: "read",
    possession: "any",
  })
  async smart4ls(
    @graphql.Args() args: Smart4lFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Smart4l[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Smart4l",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Smart4l, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Smart4l",
    action: "read",
    possession: "own",
  })
  async smart4l(
    @graphql.Args() args: Smart4lFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Smart4l | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Smart4l",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Smart4l)
  @nestAccessControl.UseRoles({
    resource: "Smart4l",
    action: "create",
    possession: "any",
  })
  async createSmart4l(
    @graphql.Args() args: CreateSmart4lArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Smart4l> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Smart4l",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Smart4l"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Smart4l)
  @nestAccessControl.UseRoles({
    resource: "Smart4l",
    action: "update",
    possession: "any",
  })
  async updateSmart4l(
    @graphql.Args() args: UpdateSmart4lArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Smart4l | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Smart4l",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Smart4l"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Smart4l)
  @nestAccessControl.UseRoles({
    resource: "Smart4l",
    action: "delete",
    possession: "any",
  })
  async deleteSmart4l(
    @graphql.Args() args: DeleteSmart4lArgs
  ): Promise<Smart4l | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
