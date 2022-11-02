import supertest from 'supertest';
import Application from 'koa';

it('should respond to GET / with a 200', async () => {
  const app = new Application();

  app.use((ctx) => {
    ctx.status = 200;
  });

  const res = await supertest(app.callback()).get('/');

  expect(res.status).toBe(200);
});
