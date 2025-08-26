const express = require("express")
const app = express()
const PORT = 3001

app.use(express.json());

let produtos =[
    {id:1, nome: "Teclado gamer", preco: 150 , categoria: "Periférico"},
    {id:2, nome: "Monitor 24", preco: 900 , categoria: "Monitores"},
    {id:3, nome: "Mouse", preco: 80 , categoria: "Periférico"},
    {id:4, nome: "Monitor DELL 32", preco: 1800 , categoria: "Monitores"},
]

app.get("/",(req, res)=>{
    res.json({ok : true, mensagem: "API loja - online"})
})

app.listen(PORT, () =>{
    console.log (`servidor rodando na http://localhost:${PORT}`)
})

app.get("/produtos", (req, res)=>{
    res.json(produtos); 
})