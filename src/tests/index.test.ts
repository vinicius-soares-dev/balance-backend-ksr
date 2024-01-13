import request from "supertest";

import app from "../app";

describe('Testing / route', () => {
  it('should respond with status 200 and "Hello world, I\'m here"', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);

    expect(response.text).toBe("Hello world, I'm here");
  })

  it('should respond with status 404', async () => {
    const response = await request(app).get('/routeError');

    expect(response.status).toBe(404);

  })
})