import express from "express";

const app: express.Application = express();

const port: number = 3000;

app.get("/", (_req, res) => {
  res.send("TypeScript With Deepak");
});

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});
