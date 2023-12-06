import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDto);
  }

  findAll(findManyDto: Prisma.BankAccountFindManyArgs) {
    return this.prismaService.bankAccount.findMany(findManyDto);
  }

  findOne(findUniqueDto: Prisma.BankAccountFindUniqueArgs) {
    return this.prismaService.bankAccount.findUnique(findUniqueDto);
  }

  update(updateDto: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateDto);
  }

  remove(removeDto: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(removeDto);
  }
}
