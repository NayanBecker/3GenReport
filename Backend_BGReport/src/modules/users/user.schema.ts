// src/modules/user/user.schema.ts
import { z } from 'zod';

export const createUserSchema = z
    .object({
        name: z.string({ required_error: 'Nome é obrigatório.' }),
        email: z.string({ required_error: 'Email é obrigatório.' }).email('Email inválido.'),
        password: z.string({ required_error: 'Senha é obrigatória.' }).min(6, 'A senha deve ter no mínimo 6 caracteres.'),
        confirmPassword: z.string({ required_error: 'Confirmação de senha é obrigatória.' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não coincidem.',
        path: ['confirmPassword'], // Campo onde o erro será mostrado
    });

export const loginSchema = z.object({
    email: z.string().email('Email inválido.'),
    password: z.string().min(1, 'Senha é obrigatória.'),
});