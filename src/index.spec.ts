import supertest from 'supertest';
import Application from 'koa';

it('should respond to GET / with a 200', async () => {
  const app = new Application();

  const res = await supertest(app.callback()).get('/');

  expect(res.status).toBe(200);
});
