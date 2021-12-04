
const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const todoSchema = require('../model/todoSchema')
const passport=require('passport')


router.get('/', passport.authenticate('bearer', { session: false }), async (req, res) => {
  console.log(req.user);
   var todos = await todoSchema.find();
    res.send(todos);
});
router.get('/:id', /*passport.authenticate('bearer', { session: false }),*/ async (req, res) => {

   var todo = await todoSchema.findOne({_id:req.params.id});
    res.send(todo);
});
//registres
router.post('/',passport.authenticate('bearer', { session: false }), async (req, res) => {
    try{
      


        
   var todo = await todoSchema.create(req.body) ;//just pour poster les champs suivant name email password age
   
   // pour crypter password

   
   //return res.status(201).send("registred successfully!")
   return res.status(201).send({messge:"registred successfully!"})
   }

  catch(error){
    res.send(error.message)   
}

});
   
 /*var  user  =new userSchema({
           nom:req.params.nom,
         age:req.params.age     //tu peut creer d'apres les parametres /:nom/:age en api de poste
      
   })    
    /*  user = await userSchema.create(user);*/
   
    module.exports = router;
    



