console.log('introduction to express js ');
//import express
const express =require('express')

const app= express() 

const port= 5000

app.use(express.static('ayoub'));

app.listen(5000,(err)=>{
    err? console.log(err) : console.log ('the server is running in port 5000' )
})


    

