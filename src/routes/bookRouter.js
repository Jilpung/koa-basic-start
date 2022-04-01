import Router from 'koa-router';

const api = new Router();

api.get('/books', (ctx, next) => {
  ctx.body = 'GET' + ctx.request.path;
  next();
});

module.exports = api;
