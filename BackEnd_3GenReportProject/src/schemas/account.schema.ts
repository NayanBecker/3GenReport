import { z } from 'zod';

export const createAccountSchema = z.object({
  nome_Account: z.string().max(100, 'O nome pode ter no máximo 100 caracteres'),
  email_Account: z.string().max(200, 'O email pode ter no máximo 200 caracteres').email('Formato de email inválido'),
  matricula_Account: z.string().max(20, 'A matrícula pode ter no máximo 20 caracteres'),
  password_Account: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres').max(20, 'A senha pode ter no máximo 20 caracteres'),
  confirmPassword_Account: z.string()
});


export const authenticateAccountSchema = z.object({
  email_Account: z.string().max(200, 'O email pode ter no máximo 200 caracteres').email('Formato de email inválido'),
  password_Account: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export const updateAccountSchema = z.object({
  nome_Account: z.string().max(100, 'O nome pode ter no máximo 100 caracteres').optional(),
  email_Account: z.string().max(200, 'O email pode ter no máximo 200 caracteres').email('Formato de email inválido').optional(),
  matricula_Account: z.string().max(20, 'A matrícula pode ter no máximo 20 caracteres').optional(),
  password_Account: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres').max(20, 'A senha pode ter no máximo 20 caracteres').optional(),
});

