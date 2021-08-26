import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import request from "supertest";
import jwt from "jsonwebtoken";

declare global {
  function signsin(id?: string): string[]; //Promise<string[]>;
}

jest.mock("../nats-wrapper");

process.env.STRIPE_KEY =
  "sk_test_51JSfhLGVvB5VgQtGXDnDxYhcr3XW9hWEfDxb1fiuMM8rG4U4JdTwuSEOyA6nixBSB2iYNE8qyTt0SHUJ5pFcGihD00T3UjxAx1";

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "asdfasdf";
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

globalThis.signsin = (id?: string) => {
  //Build a JWT payload. {id, email}
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
    email: "test@test.com",
  };

  //Create the JWT!
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Build Session object {jwt: MY_JWT}
  const session = { jwt: token };

  //Turn that session in JSON
  const sessionJSON = JSON.stringify(session);

  // take json and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString("base64");

  // return a string thats the cookie with the encoded data
  return [`express:sess=${base64}`];

  // const email = "test@test.com";
  // const password = "password";
  // const response = await request(app)
  //   .post("/api/users/signup")
  //   .send({ email, password })
  //   .expect(201);
  // const cookie = response.get("Set-Cookie");
  // return cookie;
};
