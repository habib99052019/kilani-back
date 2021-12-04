const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const  gSchema  = new mongoose.Schema({
  
   
   
  specialite:String,
    niveau:String,
    groupe:String,
    emploi:String,
    emploiExmain:String,
    Annee:String,
    semstre:String,
    etudiants: [{ type: Schema.Types.ObjectId, ref:'user'}]


    
   


  });
module.exports=mongoose.model('g',gSchema)