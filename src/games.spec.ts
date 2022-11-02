import supertest from 'supertest';

import { app } from './app';

it('should respond to POST /games with a 200 status and some game data', async () => {
  const res = await supertest(app.callback())
    .post('/games')
    .send({
      players: ['Alice', 'Bob'],
    });

  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    id: 0,
    winner: null,
    scores: [
      { player: 'Alice', score: 0 },
      { player: 'Bob', score: 0 },
    ],
  });
});
