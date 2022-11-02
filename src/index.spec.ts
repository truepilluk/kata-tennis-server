import supertest from 'supertest';

it('should respond to GET / with a 200', async () => {
  const res = await supertest(app).get('/');

  expect(res.status).toBe(200);
});
