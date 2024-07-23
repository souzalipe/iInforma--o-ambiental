import { Pergunta } from "../models/perguntas.models.js";
import { perguntasERespostas } from "../database/perguntas.database.js";
import { request, response } from "express";


export const perguntasERespostas = [
    new Pergunta(1, "O que é pegada de carbono?", "A pegada de carbono é a quantidade total de gases de efeito estufa, principalmente dióxido de carbono, emitidos direta ou indiretamente por uma pessoa, organização, evento ou produto."),
    new Pergunta(2, "Quais atividades aumentam a pegada de carbono?", "Atividades como dirigir carros, usar energia elétrica não renovável, consumir carne e produtos derivados de animais, e viagens aéreas aumentam a pegada de carbono."),
    new Pergunta(3, "Como posso reduzir minha pegada de carbono no transporte?", "Você pode reduzir sua pegada de carbono no transporte usando transporte público, andando de bicicleta, caminhando, caronas solidárias, e usando veículos elétricos ou híbridos."),
    new Pergunta(4, "Por que é importante reduzir a pegada de carbono?", "Reduzir a pegada de carbono é importante para mitigar as mudanças climáticas, proteger o meio ambiente e promover a saúde pública."),
    new Pergunta(5, "Quais mudanças na alimentação podem ajudar a reduzir a pegada de carbono?", "Reduzir o consumo de carne e laticínios, optar por alimentos locais e sazonais, e reduzir o desperdício de alimentos são maneiras eficazes de reduzir a pegada de carbono relacionada à alimentação."),
    new Pergunta(6, "O que é energia renovável?", "Energia renovável é aquela gerada a partir de fontes que se renovam naturalmente, como solar, eólica, hídrica e biomassa, e que emitem poucos ou nenhum gás de efeito estufa."),
    new Pergunta(7, "Como a reciclagem ajuda a reduzir a pegada de carbono?", "A reciclagem ajuda a reduzir a pegada de carbono ao diminuir a necessidade de produzir novos materiais, o que geralmente requer mais energia e, portanto, gera mais emissões de carbono."),
    new Pergunta(8, "Qual é o impacto das viagens aéreas na pegada de carbono?", "As viagens aéreas têm um impacto significativo na pegada de carbono devido às grandes quantidades de combustíveis fósseis queimados pelos aviões, emitindo uma quantidade substancial de CO2 e outros gases de efeito estufa."),
    new Pergunta(9, "O que é compensação de carbono?", "Compensação de carbono é a prática de financiar projetos que reduzem ou removem emissões de CO2 da atmosfera para equilibrar as emissões que você não pode evitar."),
    new Pergunta(10, "Como o consumo consciente pode reduzir a pegada de carbono?", "O consumo consciente envolve comprar menos, escolher produtos sustentáveis e de qualidade, e priorizar itens de segunda mão, tudo isso ajuda a reduzir a demanda por produção nova e, consequentemente, as emissões de carbono associadas.")
];

export const getPerguntas = (req,res)=>{
    res.status(200).send(perguntasERespostas)
}

export const createPergunta = (req,res) =>{
    const newPregunta = req.body;

    const formatdada = new Pergunta(
        newPregunta.id,
        newPregunta.question,
        newPregunta.anwer
    )

    perguntasERespostas.push(formatdada)

    res.status(201).send(`Pergunta enviada com sucesso!!`)
}

export function deletePergunta(req,res){
    let idParamentro = request.params.id;

    try{
        let perguntaDeletar = perguntasERespostas.find((Pergunta) => Pergunta.id == idParamentro);

        if(!perguntaDeletar) {
            throw new Error("Not found");
        }
        perguntasERespostas = perguntasERespostas.filter((Pergunta) => Pergunta != perguntaDeletar)
    }catch (e){
        response.status(204).send(e.message);
    }
}

export const uptadePergunta = (req,res) => {
    const perguntaID = req.params.id;

    try{
        let indexPerguntaAtualizar = perguntasERespostas.findIndex((Pergunta)=> Pergunta.id == perguntaID);

        if(indexPerguntaAtualizar == -1) {
            throw new Error("Not found");
        }

        let perguntaAtualizada = req.body;
        console.log("pergunta Atualizada", perguntaAtualizada)
        response.status(200).send({ message: "Pergunta atualizado com sucesso", perguntaAtualizada});
    } catch (e){
        response.status(404).send({error: e.message,});
    }
}