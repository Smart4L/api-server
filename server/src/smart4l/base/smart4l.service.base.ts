/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Smart4l } from "@prisma/client";

export class Smart4lServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.Smart4lFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.Smart4lFindManyArgs>
  ): Promise<number> {
    return this.prisma.smart4l.count(args);
  }

  async findMany<T extends Prisma.Smart4lFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.Smart4lFindManyArgs>
  ): Promise<Smart4l[]> {
    return this.prisma.smart4l.findMany(args);
  }
  async findOne<T extends Prisma.Smart4lFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.Smart4lFindUniqueArgs>
  ): Promise<Smart4l | null> {
    return this.prisma.smart4l.findUnique(args);
  }
  async create<T extends Prisma.Smart4lCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.Smart4lCreateArgs>
  ): Promise<Smart4l> {
    return this.prisma.smart4l.create<T>(args);
  }
  async update<T extends Prisma.Smart4lUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.Smart4lUpdateArgs>
  ): Promise<Smart4l> {
    return this.prisma.smart4l.update<T>(args);
  }
  async delete<T extends Prisma.Smart4lDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.Smart4lDeleteArgs>
  ): Promise<Smart4l> {
    return this.prisma.smart4l.delete(args);
  }
}