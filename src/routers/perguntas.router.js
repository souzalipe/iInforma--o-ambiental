import { Router } from "express";

import { getPerguntas,createPergunta } from "../controllers/pergunta.controllers.js";

const perguntaRouter = Router();

perguntaRouter.get("/pergunta/all",getPerguntas);

perguntaRouter.post("/pergunta/create",createPergunta);

export {perguntaRouter};