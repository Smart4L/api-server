import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SensorService } from "./sensor.service";
import { SensorControllerBase } from "./base/sensor.controller.base";

@swagger.ApiTags("sensors")
@common.Controller("sensors")
export class SensorController extends SensorControllerBase {
  constructor(
    protected readonly service: SensorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
