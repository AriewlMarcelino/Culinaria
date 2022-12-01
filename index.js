const express = require('express'); 
const path = require('path');
const port = 3000;
const app =  express();

app.use(express.static('public'))
const basePath = path.join(__dirname,"./public/templates");


app.get('/home.html',(req,res)=>{
    res.sendFile(`${basePath}/home.html`)
})

app.get('/portifolio.html',(req,res)=>{
    res.sendFile(`${basePath}/Portifolio.html`)
})

app.get('/sobre.html',(req,res)=>{
    res.sendFile(`${basePath}/sobre.html`)
})


app.get('/livros.html',(req,res)=>{
    res.sendFile(`${basePath}/livros.html`)
})


app.get('/blog.html',(req,res)=>{
    res.sendFile(`${basePath}/blog.html`)
})


app.get('/contato.html',(req,res)=>{
    res.sendFile(`${basePath}/contato.html`)
})


//middleware page 404
app.use(function(req,res,next){
    res.status(404).sendFile(`${basePath}/404.html`)
})


app.listen(port,()=>{
    console.log(`Server is running port${port}`)
})


