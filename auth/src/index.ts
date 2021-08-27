import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
<<<<<<< HEAD
  console.log("starting auth again... ");
  console.log("step 11");
=======
  console.log("starting auth again 2... ");
>>>>>>> 1be7b73ad2603ca5170efeb4dbf12b4b92e473c9
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to mongodb");
  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log("auth running on http://localhost:3000 !!!");
});

start();
