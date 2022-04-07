import { Module } from "@nestjs/common";
import { Smart4lModuleBase } from "./base/smart4l.module.base";
import { Smart4lService } from "./smart4l.service";
import { Smart4lController } from "./smart4l.controller";
import { Smart4lResolver } from "./smart4l.resolver";

@Module({
  imports: [Smart4lModuleBase],
  controllers: [Smart4lController],
  providers: [Smart4lService, Smart4lResolver],
  exports: [Smart4lService],
})
export class Smart4lModule {}
