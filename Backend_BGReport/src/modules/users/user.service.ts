// src/modules/user/user.service.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { z } from 'zod';
import { server } from '../../server';
import { createUserSchema, loginSchema } from './user.schema';

const prisma = new PrismaClient();

type CreateUserInput = z.infer<typeof createUserSchema>;
type LoginInput = z.infer<typeof loginSchema>;

export async function createUserService(data: CreateUserInput) {
    const { password, confirmPassword, ...rest } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { ...rest, password: hashedPassword },
        select: { id: true, email: true, name: true },
    });

    return user;
}

export async function authenticateUserService(data: LoginInput) {
    const user = await prisma.user.findUnique({
        where: { email: data.email },
    });

    if (!user) {
        throw new Error('Email ou senha inválidos.');
    }

    const isPasswordCorrect = await bcrypt.compare(data.password, user.password);

    if (!isPasswordCorrect) {
        throw new Error('Email ou senha inválidos.');
    }

    const { password, ...payload } = user;

    return server.jwt.sign(payload, { expiresIn: '7d' });
}