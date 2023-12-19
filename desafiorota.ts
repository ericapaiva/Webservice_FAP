const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = [
    { id: 1, nome: "John Doe", idade: 43, profissao: "Desenvolvedor" },
    { id: 2, nome: "Mary Smith", idade: 25, profissao: "CEO empresa X" },
];

app.get("/", (req, res) => res.send("Bem-vindo ao meu web service!"));

app.get("/users", (req, res) => res.send(users));

app.get("/users/:id", (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    return user ? res.send(user) : res.status(404).json({ mensagem: "Usuário não encontrado" });
});

app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        nome: req.body.nome,
        idade: req.body.idade,
        profissao: req.body.profissao,
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

app.get("/saudacao/:nome", (req, res) => res.send(`Olá, ${req.params.nome} tudo bem?`));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
