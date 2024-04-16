// const http = require("http");
// const PORT = 3001;
// const characters = require("./utils/data");


// http
//     .createServer((req, res) => 
//     {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;

//     if(url.includes("/rickandmorty/character")){
//         const id = Number(url.split("/").pop());

//         const character = characters.find((char) => {
//             return char.id === id;
//         });

//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify(character));

//         // getCharById(res, id)
//     }
// })
// .listen(PORT, 'localhost');

const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index')

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});


// middleware
server.use(express.json());
server.use('/rikandmorty', router);

server.listen(PORT, () => {
   console.log(`Server raised in port:  + ${PORT}`);
});

