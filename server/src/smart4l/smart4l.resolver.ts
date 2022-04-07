import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { Smart4lResolverBase } from "./base/smart4l.resolver.base";
import { Smart4l } from "./base/Smart4l";
import { Smart4lService } from "./smart4l.service";

@graphql.Resolver(() => Smart4l)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class Smart4lResolver extends Smart4lResolverBase {
  constructor(
    protected readonly service: Smart4lService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
