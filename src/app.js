import koa from 'koa';
import logger from 'koa-logger';
import koaBody from 'koa-body';
const app = new koa();

app.use(logger());
app.use(koaBody());

const movieRouter = require('./routes/movies');
app.use(movieRouter.routes());

app.listen(4000, () => {
  console.log('port 4000');
});
