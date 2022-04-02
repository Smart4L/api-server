import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SensorResolverBase } from "./base/sensor.resolver.base";
import { Sensor } from "./base/Sensor";
import { SensorService } from "./sensor.service";

@graphql.Resolver(() => Sensor)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SensorResolver extends SensorResolverBase {
  constructor(
    protected readonly service: SensorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
