import koa from 'koa';
import Router from 'koa-router';

const app = new koa();
const router = new Router();
const api = require('./routes');

router.use('/routes', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('port 4000');
});
