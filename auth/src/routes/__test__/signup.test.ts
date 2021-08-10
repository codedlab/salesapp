import request from "supertest";
import { getParsedCommandLineOfConfigFile } from "typescript";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "play@play.com",
      password: "password",
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "playplaycom",
      password: "password",
    })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "change@gmail.com",
      password: "",
    })
    .expect(400);
});

it("returns a 400 with an missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "sayakrasi@gmail.com",
    })
    .expect(400);
  await request(app)
    .post("/api/users/signup")
    .send({ password: "sdfsdfsdfs" })
    .expect(400);
});

it("Disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@tes.net",
      password: "1234567890",
    })
    .expect(201);
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@tes.net",
      password: "1234567890",
    })
    .expect(400);
});

it("sets a cookie after a successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "play@play.com",
      password: "password",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
