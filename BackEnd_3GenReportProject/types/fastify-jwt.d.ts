// types/fastify-jwt.d.ts
import '@fastify/jwt';

declare module '@fastify/jwt' {
    interface FastifyJWT {
        payload: {
            id_Account: number;
        };
        user: {
            id_Account: number;
        };
    }
}
