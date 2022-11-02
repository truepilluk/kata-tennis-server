import { app } from './app';

app.use(async (ctx, next) => {
  await next();

  console.log(
    `${new Date().toISOString()} ${ctx.method} ${ctx.path} ${
      ctx.status
    } Request handled`
  );
});

app.listen(process.env.PORT ?? 3000);
