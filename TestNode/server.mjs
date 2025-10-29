// server.mjs
import { createServer } from "node:http";

const server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("¡Hola, mundo!\n");
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Escuchando en 127.0.0.1:3000"); 
});