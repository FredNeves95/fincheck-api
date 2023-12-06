import { BankAccountsRepository } from './../../shared/database/repositories/bank-accounts.repositories';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';

@Injectable()
export class BankAccountsService {
  constructor(private readonly bankAccountsRepo: BankAccountsRepository) {}
  async create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { name, type, initialBalance, color } = createBankAccountDto;

    return await this.bankAccountsRepo.create({
      data: {
        userId,
        name,
        type,
        initialBalance,
        color,
      },
    });
  }

  async findAll(userId: string) {
    return await this.bankAccountsRepo.findAll({ where: { userId } });
  }

  async findOne(userId: string, id: string) {
    const bankAccount = await this.bankAccountsRepo.findOne({
      where: { userId, id },
    });

    if (!bankAccount) {
      throw new NotFoundException();
    }

    return bankAccount;
  }

  async update(
    userId: string,
    id: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    const { name, type, initialBalance, color } = updateBankAccountDto;

    const bankAccount = await this.bankAccountsRepo.findOne({
      where: { userId, id },
    });

    if (!bankAccount) {
      throw new NotFoundException();
    }

    return this.bankAccountsRepo.update({
      where: { userId, id },
      data: {
        name,
        type,
        initialBalance,
        color,
      },
    });
  }

  async remove(userId: string, id: string) {
    const bankAccount = await this.bankAccountsRepo.findOne({
      where: { userId, id },
    });

    if (!bankAccount) {
      throw new NotFoundException();
    }

    return await this.bankAccountsRepo.remove({ where: { userId, id } });
  }
}
