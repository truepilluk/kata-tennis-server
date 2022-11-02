import Application from 'koa';

export const app = new Application();

app.use(async (ctx, next) => {
  await next();

  console.log(
    `${new Date().toISOString()} ${ctx.method} ${ctx.path} ${
      ctx.status
    } Request handled`
  );
});

app.use((ctx) => {
  if (ctx.path === '/') {
    if (ctx.method === 'GET') {
      ctx.status = 200;
    } else {
      ctx.status = 405;
    }
  }
});
