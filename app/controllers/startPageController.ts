import Koa from 'koa';

export default async (ctx: Koa.Context) => {
    ctx.status = 200;
    ctx.body = 'Hello World!';
};
