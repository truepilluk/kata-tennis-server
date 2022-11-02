import Application from 'koa';

export const app = new Application();

app.use((ctx) => {
  if (ctx.path === '/') {
    if (ctx.method === 'GET') {
      ctx.status = 200;
    } else {
      ctx.status = 405;
    }
  }
});
