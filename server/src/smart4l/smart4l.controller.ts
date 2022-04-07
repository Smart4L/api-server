import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Smart4lService } from "./smart4l.service";
import { Smart4lControllerBase } from "./base/smart4l.controller.base";

@swagger.ApiTags("smart4ls")
@common.Controller("smart4ls")
export class Smart4lController extends Smart4lControllerBase {
  constructor(
    protected readonly service: Smart4lService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
