import Fastify from 'fastify';
import cors from '@fastify/cors';
import { authRoutes } from './routes/account.routes';

export const app = Fastify();

app.register(cors, {
  origin: true,
});


// Rotas
app.register(authRoutes, { prefix: '/account' });
