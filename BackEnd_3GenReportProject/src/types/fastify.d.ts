import { FastifyRequest } from 'fastify';
import { Readable } from 'stream';

declare module 'fastify' {
    interface FastifyRequest {
        file(): Promise<{
            file: Readable;
            filename: string;
            encoding: string;
            mimetype: string;
            fields: Record<string, string | string[]>;
        }>;
    }
} 