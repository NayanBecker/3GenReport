import fastify from 'fastify';
import mongoose from 'mongoose';
import cors from '@fastify/cors';
import multipart from '@fastify/multipart';
import fastifyStatic from '@fastify/static';
import { config } from 'dotenv';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { reportRoutes } from './routes/reportRoutes';
import pdfRoutes from './routes/pdf';

config();

const server = fastify({
  logger: true
});

// Registrar plugins
async function registerPlugins() {
  await server.register(cors);
  await server.register(multipart);
  await server.register(fastifyStatic, {
    root: join(__dirname, '../uploads'),
    prefix: '/uploads/'
  });
}

// Criar pasta de uploads se não existir
const uploadsDir = join(__dirname, '../uploads');
if (!existsSync(uploadsDir)) {
  mkdirSync(uploadsDir);
}

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/3gen-report')
  .then(() => server.log.info('Conectado ao MongoDB'))
  .catch(err => server.log.error('Erro ao conectar ao MongoDB:', err));

// Registrar rotas
server.register(reportRoutes, { prefix: '/api' });
server.register(pdfRoutes, { prefix: '/api' });

// Iniciar o servidor
const start = async () => {
  try {
    await registerPlugins();
    await server.listen({ port: Number(process.env.PORT) || 3000, host: '0.0.0.0' });
    server.log.info(`Servidor rodando em ${server.server.address()}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();