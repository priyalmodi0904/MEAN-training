const express=require('express');
const path=require('path');
const calcRouter=require('./routers/BasicRouter');
const app=express();
const port=3000;
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());   //this is used for form request

app.get("/",(req,res)=>{
    res.render('home')
})

app.use('/calc',calcRouter);
app.listen(port,()=>console.log(`server is running on port ${port}`));