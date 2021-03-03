


const  express = require("express"),
path = require("path");

const bodyparser = require("body-parser");
const { get } = require("http");
   

   const app = express();

   const  PORT = 5100;

   app.use(bodyparser.json({limit: '50mb'}));
   app.use(bodyparser.urlencoded({extended:true, limit:'50mb'}));
   let empdata=[
       {
           "name": "sameer",
           "age" : "28",
           "city": "Aurangabad",
           "id"  : "1"
       }
   ]


   app.listen(PORT, ()=>{
       console.log('Server is listing ${PORT}');
   });


//    app.get('empdata',empdata (req,res));
//    res.send(empdata)


   app.get('/emp',(req,res)=>{
       res.send(empdata)
   })

   