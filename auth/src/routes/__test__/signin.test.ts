import request from "supertest";
import { app } from "../../app";

it("fails when an email does not exist", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "play@play.com",
      password: "password",
    })
    .expect(400);
});

it("fails when an incorrect password is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "play@play.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "play@play.com",
      password: "asdadfaadfdaad",
    })
    .expect(400);
});

it("responds with a cookie when given a vaild credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "play@play.com",
      password: "password",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "play@play.com",
      password: "password",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
