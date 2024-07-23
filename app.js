import express from "express";
import { perguntaRouter } from "./src/routers/perguntas.router.js";

const app = express();

app.use(express.json());

app.use(perguntaRouter);

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`)
})