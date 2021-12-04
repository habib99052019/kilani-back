const express = require('express');
const { truncate } = require('lodash');
const { isValidObjectId } = require('mongoose');
const cron  = require ( 'node-cron' ) ; 
const router = express.Router();
var noveauxAncien=0;
var tabN=[];


const eveSchema = require('../model/eveSchema')
const todoSchema=require('../model/todoSchema')
const userSchema=require('../model/userSchema')

router.get('/OP', async (req, res) => {
    console.log('fghjklm')
    var operations= await eveSchema.find()

    res.send(operations)
})

 
router.post('/registerOp', async (req, res) => {
    console.log("ajt")
    try{
        

  
       
    var med = await eveSchema.create(req.body);//just pour poster les champs suivant name email password age
   
          console.log(med);
   return res.send({message:true})
   
    }catch(error){
        res.send(error.message)   
    }
    
})
   
 module.exports = router;