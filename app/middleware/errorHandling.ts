import Koa from 'koa';
import { get } from 'lodash';

// config
import { LOG_LEVEL } from '../config';

export default async (ctx: Koa.Context, next: Function): Promise<void> => {
    try {
        await next();
    }
    catch (error) {
        if (error.status === 401) {
            console.log(`Error trying to call ${ctx.request.url}`);
            console.log('401 Unauthorized');
            ctx.status = 401;
            ctx.body = {
                message: error.originalError ? error.originalError.message : error.message,
                status: 401
            };

            return;
        }

        if (error && error.response) {
            const { status, data } = error.response;
            console.log(`Error trying to call ${ctx.request.url}`);
            console.log(JSON.stringify(data));

            ctx.status = status || 503;
            ctx.body = {
                message: data,
                status: status || 503
            };
            return;
        }

        if (error) {
            const code = error.statusCode || error.status || 500;
            const message = get(error, 'message', 'Unknown error');

            if (code >= 500) {
                console.log(`Error trying to call ${ctx.request.url}`);
                console.log(`Caught Error: ${message}`, message);
            }
            else {
                console.log(`Error trying to call ${ctx.request.url}`);
                console.log(`Caught Error: ${message}`, message);
            }

            ctx.status = code;
            ctx.body = {
                message,
                status: code
            };
        }

        if (LOG_LEVEL === 'debug') {
            console.log('error: ', error);
            console.log('context: ', ctx);
        }
    }
};
