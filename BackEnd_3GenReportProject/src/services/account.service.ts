import { hash, compare } from 'bcryptjs';
import { PrismaClient } from '../generated/prisma';
import { app } from '../app';

const db = new PrismaClient();
export interface CreateAccountDataInterface {
  nome_Account: string;
  email_Account: string;
  matricula_Account: string;
  password_Account: string;
  confirmPassword_Account: string;
}
export interface UpdateAccountDataInterface {
  id_Account: number;
  nome_Account?: string;
  email_Account?: string;
  password_Account?: string;
}
export interface AuthAccountDataInterface {
  email_Account: string;
  password_Account: string;
}


export async function createAccountService(data: CreateAccountDataInterface) {
  if (data.password_Account !== data.confirmPassword_Account) {
    throw new Error('As senhas não coincidem.');
  }
  const hashedPassword = await hash(data.password_Account, 8);

  const createdAccount = await db.t_Account.create({
    data: {
      nome_Account: data.nome_Account,
      email_Account: data.email_Account,
      password_Account: hashedPassword,
      matricula_Account: data.matricula_Account
    },
  });

  return createdAccount;
}

export async function updateAccountService(data: UpdateAccountDataInterface) {

  const dataToUpdate: any = {};

  if (data.nome_Account) dataToUpdate.nome_Account = data.nome_Account;
  if (data.email_Account) dataToUpdate.email_Account = data.email_Account;
  if (data.password_Account) {
    dataToUpdate.password_Account = await hash(data.password_Account, 8);
  }

  const account = await db.t_Account.update({
    where: { id_Account: data.id_Account },
    data: dataToUpdate,
  });

  return {
    id: account.id_Account,
    name: account.nome_Account,
    email: account.email_Account,
  };
}

export async function deleteAccountService({ id_Account }: { id_Account: number }) {
  const deletedAccount = await db.t_Account.delete({
    where: { id_Account },
  });

  return deletedAccount;
}



export async function authenticateAccountService({ email_Account, password_Account, }: AuthAccountDataInterface) {
  const account = await db.t_Account.findUnique({
    where: { email_Account },
  });

  if (!account || !(await compare(password_Account, account.password_Account))) {
    throw new Error('Credenciais inválidas');
  }

  const token = app.jwt.sign(
    { id_Account: account.id_Account },
    { expiresIn: '7d' }
  );

  return token;
}
