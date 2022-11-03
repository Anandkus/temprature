const express=require("express")
const port=process.env.PORT ||3001
const path = require('path')

const app=express()
const hbs=require('hbs')
//built in middleware  to acces file in public folder
const p=path.join(__dirname,'/public')
//console.log(p)
app.use(express.static(p))



// //to set engine
app.set("view engine", "hbs")
//partials folder access 
const part=path.join(__dirname,'/partials')
hbs.registerPartials(part)

app.get("/",(req,res)=>{
res.render("index")

})

app.get('/abt',(req,res)=>{
    res.render('about')
})
app.get('/whether',(req,res)=>{
    res.render('wheather')
})

//in route ke alawa kuch or dalne pr ye call hoga 
//ye bootum me dalna hai 
app.get('*',(req,res)=>{
    res.render("404")
}) 



app.listen(port,()=>{
    console.log(`server is run http://localhost:${port}`)
})