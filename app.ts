import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo ao meu servidor!");
});
app.get("/user", (req: Request, res: Response) => {
  const usuario = {
    nome: "Danilo",
    idade: 35,
    email: "danilolirapersonal@hotmail.com",
  };
  res.json(usuario);
});

const porta = 3000;



app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
