const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const  eveSchema  = new mongoose.Schema({
  
   
  operation:String,

  prix:String   

    
   


  });
module.exports=mongoose.model('evenement',eveSchema);