import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { authRoutes } from './routes/account.routes';

export const app = Fastify();

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: process.env.JWT_SECRET || '3GenReport-secret',
});

// Rotas
app.register(authRoutes, { prefix: '/account' });
