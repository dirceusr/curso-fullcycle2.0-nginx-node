const express =require('express')
const app=express()
const handlebars=require("express-handlebars")
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const port = 3000
const Pessoa=require("./models/Pessoa")

app.engine('handlebars',handlebars({defaultLayout:'index',
handlebars: allowInsecurePrototypeAccess(Handlebars)}))
app.set('view engine','handlebars')

Pessoa.create({name:"Dirceu"})

app.get('/', (req,res)=>{
    Pessoa.findAll().then(function(pessoas){
      res.render('pessoas',{pessoas:pessoas})
    })
})
app.listen(port);