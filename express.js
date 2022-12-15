let express = require("express");
const moment = require("moment");
const PORT = 3001;
let app = express();

// app.all("/",(req, res, next) =>{
//     res.send(`Estoy en el metodo ALL DE EXPRESS`);;
// })

let visitas = 0;

app.get("/", (req, res, next) =>{
    res.send(`<h1 style ="color:blue;">Bienvenidos al servidor express!!<h1>`);;
})

app.get("/visitas", (req, res, next) =>{
    visitas ++;
    res.send(`Total visitas ${visitas}`);;
})

app.get("/fyh", (req, res, next) =>{
    let hora = moment().format("L")
    res.json({hora});;
})

// app.get("/estudiantes", (req, res, next) =>{
//     res.send("Estoy en estudiantes!");;
// })

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));