const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT ?? 3333;
const app = express();

app.get("/", (req, res) => {
    res.end("Welcome to Web Academy!");
});

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
})