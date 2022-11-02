import supertest from 'supertest';
import Application from 'koa';

const app = new Application();

app.use((ctx) => {
  ctx.status = 200;
});

it('should respond to GET / with a 200 status', async () => {
  const res = await supertest(app.callback()).get('/');

  expect(res.status).toBe(200);
});

it('should respond to POST / with a 405 status', async () => {
  const res = await supertest(app.callback()).post('/');

  expect(res.status).toBe(405);
});
