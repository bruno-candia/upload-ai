import fastify from "fastify";
import { getAllPrompts } from "./routes/get-all-prompts";

const PORT = 3333;

const app = fastify();

app.register(getAllPrompts);

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`HTTP Server running!\nAccess on: http://localhost:${PORT}`);
  });
