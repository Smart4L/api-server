import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { Smart4lServiceBase } from "./base/smart4l.service.base";

@Injectable()
export class Smart4lService extends Smart4lServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
