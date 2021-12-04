
const express = require('express')
const router = express.Router();


const lodash = require('lodash')
const userSchema = require('../model/userSchema')
const groupSchema = require('../model/gSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('../passport/passport');
const cron = require('node-cron');
const gSchema = require('../model/gSchema');


k=true

//registre
router.post('/registerGroup',  (req,res,next) => {
  var initial = new Promise((resolve, reject) => {
    resolve(userSchema.findOne({cartEtudiant:req.body.cartEtudiant}))
  });
  initial.then(user => {
    console.log(user,'1')
    var initial2 = new Promise((resolve, reject) => {
      resolve(gSchema.findOne({specialite:user.specialite,niveau:user.niveau,groupe:user.groupe}))
    });
    initial2.then(gr => {
      console.log(gr,"2")
       if(gr==null){
        //
        var initial3=gSchema.create({
 
          niveau: user.niveau,
          specialite: user.specialite,  
          groupe: user.groupe 
            
      
     })
        initial3.then(grC => {
          console.log(grC,"3")
         user.group=grC._id
         ///
         var initial4 = new Promise((resolve, reject) => {          
          resolve(user.save)
        });
        initial4.then(us => {
             console.log(us,"grC")
             res.send(us)
         
          });
         ///
          }); 
        //
       }
       if(gr){
          user.group=gr._id
          var initial4 = new Promise((resolve, reject) => {          
            resolve(user.save)
          });
          initial4.then(us => {
               console.log(us,"gr")
               res.send(us)
           
            });
       }
    })
  })
})

//nbda    


//get

/*var  tabGR= await gSchema.find()
res.send( tabGR)*/




/* var users = await userSchema.find().lean();
 
 
 var tab = []
 var tt=[]
 var len=Number;
 var tabFinal=[];
var  tabGroup=[];



 

 

for (let i = 0; i < users.length; i++) {
           
           if(users[i].niveau==undefined){
             users[i].niveau=''
           }
           if(users[i].groupe==undefined){
             users[i].groupe=''
           }
   var len= tabGR.filter(word => (word.specialite == users[i].specialite) && (word.niveau == users[i].niveau) && (word.groupe == users[i].groupe)).length
     
    
       
     if ( len== 0 && (users[i].specialite !='') && (users[i].specialite != null ))
     {
      
   tabGR.push({ specialite: users[i].specialite, niveau: users[i].niveau, groupe: users[i].groupe, etudiants:tt })
   var Groo  =new gSchema({
 
     niveau: users[i].niveau,
     specialite: users[i].specialite,  
     groupe: users[i].groupe, 
     etudiants:tt     //tu peut creer d'apres les parametres /:nom/:age en api de poste
 
})
       gSchema.create(Groo).then((val)=>{
         console.log('push')
       })
           
   
   }
 
 } 
  

      
    ///resonement
    ///fin resonement
                                   
                                       
                                  
    for (let i = 0; i < tabGR.length; i++) 
    {  
      
      
       tabFinal.push( {etudiants:JSON.stringify(users.filter(et =>(et.specialite===tabGR[i].specialite)&&(et.niveau===tabGR[i].niveau)&&(et.groupe===tabGR[i].groupe))),specialite: tabGR[i].specialite, niveau: tabGR[i].niveau, groupe: tabGR[i].groupe})
   
    }
    console.log(tabFinal)

    res.send(tabFinal)*/






//modif
router.put('/modifDemandeG/:id', async (req, res) => {
  console.log(5)

  console.log(req.params.id);
  await gSchema.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(async (group) => {

    var groups = await gSchema.find();
    res.send(groups)
  });

})
//get
router.get('/VGroup', async (req, res) => {
  gSchema.find().lean().exec(function (err, groupes) {
    if (err){}
    if (groupes) {
      res.send(groupes)
    }
  })
})
//sup
router.delete('groupDelet/:id', async (req, res) => {

  const groupDelete = await todoSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
    var groups = await gSchema.find();
    res.send(groups)
  })


});
//fin        


module.exports = router;
