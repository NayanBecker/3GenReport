
import fastify from 'fastify';
import { compileRoute } from './routes/compile.route';

const server = fastify({
    logger: true,
    bodyLimit: 10 * 1024 * 1024,
});

server.register(compileRoute);

server.get('/', async () => {
    return { status: 'Serviço de compilação LaTeX está no ar. Use a rota POST /compile.' };
});

const start = async () => {
    try {
        const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
        await server.listen({ port, host: '0.0.0.0' });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();