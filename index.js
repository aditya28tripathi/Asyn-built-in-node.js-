const fs = require("fs");


fs.readFile("./sample.txt", "utf-8",(err,data)=>{

   if(err){
      return err;
   }

   console.log(data);

});
