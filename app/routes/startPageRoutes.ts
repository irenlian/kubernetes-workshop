import Router from 'koa-router';
import startPageController from '../controllers/startPageController';

const router: Router = new Router();

router.get('/', startPageController);

export default router;
