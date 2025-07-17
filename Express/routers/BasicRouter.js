const router=require('express').Router();
router.get('/home',(req,res)=>{
    res.render('calchome')
})

router.get("/add",(req,res)=>{
    
   const {fnum,snum}=req.query;
   const z=fnum*1 +snum*1;     //kisi bhi string ko integer me convert krna h
   res.render('result',{
    finalres : z
   })

})

//query variable is for get request for post request we use body but we have to declare body because bydefalut body is disabled so to enable it go to app.js
router.post('/mul',(req,res)=>{
     const {fnum,snum}=req.body;
   const z=fnum*snum;     //kisi bhi string ko integer me convert krna h
   res.render('result',{
    finalres : z
   })
   
})
module.exports=router;



//req.query fetches the data in string form


//if we use get request our data is not secured because everthinng is visisble on url
//we can only send text data not binary data
//we can only send limited data limit is 255 characters\
// browsing is done only because of get 