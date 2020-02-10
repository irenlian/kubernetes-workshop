import Koa from 'koa';
import statusAPI from './statusRoutes';
import startPageAPI from './startPageRoutes';

export default (app: Koa) => {
    app.use(startPageAPI.routes());
    app.use(statusAPI.routes());
};
