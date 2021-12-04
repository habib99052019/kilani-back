const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  userSchema  = new mongoose.Schema({
  

  name:String,
  prenom:String,
  date:String,  
  suivi:[],
  email:String,//{type:String,match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
  phone:String,
  adresse:String,
  lieux:String,
  nouveaux:Boolean,
  sepcialite:String,
   dateReponse:String,
  Reponse:[]
   

  });
module.exports=mongoose.model('user',userSchema);
 /* name:{type:String,
      required:true
     // test: /^[a-z0-9]+$/gi          // sirijex comme validation
    },
    cartEtudiant:{type:Number,min:[23,'vous etes tres petit'],max: [60 ,'tres grand']},//pour donner un message de validation pour age
  
    sepcialite:{type:String,
         enum:['ajent bireaux',"caisser","securité"] ,//pour choisi l'un de tableaux
         required:true
    },
     images:{
      type:Array,
      validate:{
        validator:function(params) {
          return params.length==0
                                         // costum validtor
        },
        message:'remplire le tableaux'
      

      } 
    },                                        
    activ:Boolean,
    salery:{
      type:Number,
      required:function(){
        return this.age>40
      }
    },
    */
   /*photoProfil:{type:String},
   ggg:String,
    name:String,
    prenom:String,
    cartEtudiant:Number,
    images:[{type:String}],
    password:String,   
    email:{type:String,match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    demandes: [{ type: Schema.Types.ObjectId, ref:'evenement'}],
    user:  {type: Schema.Types.ObjectId, ref: 'todo'},
    nombreDemmandes:Number*/
   
   

