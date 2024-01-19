import request from "supertest";

import app from "../app";

jest.useRealTimers();


describe("testing login success", () => {
  test("should respond with status 200 and 'User logged in successfully'", async () => {
  
    const response = await request(app).post('/').send({
      email: "vinicius@gmail.com",
      password: 12345678
    });

    jest.setTimeout(10 * 1000);
    expect(response.status).toBe(200);
    expect(response.text).toBe("{\"message\":\"User logged in successfully\"}");


  }, 1000);

});