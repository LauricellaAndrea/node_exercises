import supertest from "supertest";
import app from "./app.mjs";

const request = supertest(app);

text("GET /series", async () => {
  const response = await request
    .get("/series")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(response.body).toBe([
    { name: "Better Call Saul" },
    { name: "Breaking Bad" },
  ]);
});
