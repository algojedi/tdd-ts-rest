import request from "supertest";
import { app } from "./index";

describe('Testing of registration process', () => {
it("returns 200 OK when the user request is valid", (done) => {
  request(app)
    .post("/api/1.0/users")
    .send({
      username: "asher",
      email: "asher@hotmail.com",
      password: test,
    })
    .then((response) => {
      expect(response.status).toBe(200);
      done();
    });
});

it("returns message in body upon successful registration", (done) => {
  request(app)
    .post("/api/1.0/users")
    .send({
      username: "asher",
      email: "asher@hotmail.com",
      password: test,
    })
    .then((response) => {
      expect(response.body.message).toBe('User created');
      done();
    });
});

})