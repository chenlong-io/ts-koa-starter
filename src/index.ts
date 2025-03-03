import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import { PORT } from './config';
import routesAction from './routes';
import { responseMiddleware } from './middleWare/responseMiddleWare';

const app = new Koa();
const router = new Router();

//路由及处理
routesAction.forEach(({ path, type, action }) => router[type](path, action));

// 应用中间件
app.use(responseMiddleware);
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT, () => {
  console.log(`应用启动成功 端口:${PORT}`);
});
