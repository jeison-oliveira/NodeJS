import http from "http";
import fs from "fs";
import { createLink, createVoltar } from "./utils.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3333;
// const folder = process.argv[2];
const folder = "./files";
console.log("Pasta: ", folder);
const fsPromises = fs.promises;

const server = http.createServer((req, res) => {
  let url = req.url;
  console.log("URL: ", url);
  
  let extensao = url.split(".")[1];
  console.log("Extensão: ", extensao);
  
  let mimeType = "text/html";
  if (extensao == "css") {
    mimeType = "text/css";
  } else if (extensao == "js") {
    mimeType = "text/javascript";
  }
  res.writeHead(200, { "Content-Type": `${mimeType}; charset=utf-8` });

  let filename = (url == "/") ? "index.html" : url;

  fsPromises.readFile(`${folder}/${filename}`).then((content) => {
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
