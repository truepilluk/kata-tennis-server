import supertest from 'supertest';
import Application from 'koa';

const app = new Application();

app.use((ctx) => {
  if (ctx.path === '/') {
    if (ctx.method === 'GET') {
      ctx.status = 200;
    } else {
      ctx.status = 405;
    }
  }
});

it('should respond to GET / with a 200 status', async () => {
  const res = await supertest(app.callback()).get('/');

  expect(res.status).toBe(200);
});

it('should respond to POST / with a 405 status', async () => {
  const res = await supertest(app.callback()).post('/');

  expect(res.status).toBe(405);
});

it('should respond to GET /foo with a 404 status', async () => {
  const res = await supertest(app.callback()).get('/foo');

  expect(res.status).toBe(404);
});

it('should respond to POST /foo with a 404 status', async () => {
  const res = await supertest(app.callback()).post('/foo');

  expect(res.status).toBe(404);
});
