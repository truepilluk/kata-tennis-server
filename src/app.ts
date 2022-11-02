import Application from 'koa';
import bodyParser from 'koa-bodyparser';

export const app = new Application();

app.use(async (ctx, next) => {
  await next();

  console.log(
    `${new Date().toISOString()} ${ctx.method} ${ctx.path} ${
      ctx.status
    } Request handled`
  );
});

app.use(bodyParser());

app.use((ctx) => {
  if (ctx.path === '/') {
    if (ctx.method === 'GET') {
      ctx.status = 200;
    } else {
      ctx.status = 405;
    }
  } else if (ctx.path === '/games') {
    ctx.status = 200;
    ctx.body = {
      id: 0,
      winner: null,
      scores: [
        { player: ctx.request.body.players[0], score: 0 },
        { player: ctx.request.body.players[1], score: 0 },
      ],
    };
  }
});
