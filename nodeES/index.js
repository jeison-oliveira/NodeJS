import http from "http";
import fs from "fs";
import { createLink, createVoltar } from "./utils.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];
console.log(folder);

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    fs.readdir(folder, (err, files) => {
        //console.log(req.url);
        if(req.url == '/'){
            if(err) console.error(err)
            else {
                files.forEach(f => res.write(`${createLink(f)}<br>`));
                res.end("Instituto de Computação");
            }
        } else {
            fs.readFile(`${folder}/${req.url}`, (err, content) => {
                res.write(createVoltar());
                //console.log(content);
                res.end(content);
            });
        }        
    })
});

server.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})