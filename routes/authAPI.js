
const express = require('express')
const router = express.Router();
const lodash = require('lodash')
const userSchema = require('../model/userSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('../passport/passport');
const cron = require('node-cron');


const twilio = require('twilio')
const nodemailer = require('nodemailer');







///send sms
router.get('/sendSMS', async (req, res) => {
    console.log("ha")
    var client=new twilio("ACb32e10df0293feb043befd525b7c2ac1","b334b83198459bb2013caa810ba63b13");
    client.messages.create({
        username:"habib",
        body: 'nouveaux notification',
        from: '+13368928921',
        to: '+21652028532'
    }).then(message => {
        console.log(message);
        res.send({message: true});
    }).
    catch(err => {
        console.log(err);
        res.status(500).send({message: false});
    })
});
////f sms
///send email
router.post('/send-mail', async(req, res) => {

    // email message options
    const mailOptions = {
        from:"nerolik60@gmail.com",
        to: req.body.email ,
        subject: 'Tunis santé',
        text:"Merci pour votre insciption sur nos site votre code : 4452",
    };
    // email transport configuration

    var transport = await nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: "nerolik60@gmail.com",
            pass: "5n5a171078"
        }
    });
    // send email
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send({message: false});
        } else {
            console.log('Email sent: ' + info.reponse);
            res.send({message: true});
        }
    });
});

///sendFactur
router.post('/send-mailF', async(req, res) => {
    console.log('url');
    console.log(req.body.email)

    // email message options
    const mailOptions = {
        from:"nerolik60@gmail.com",
        to:req.body.email ,
        subject: 'Tunis santé',
        
        html: "<p>pour voire votre devis cliquer sur <a href='http://localhost:4200/fac' >facture tunisie santé</a></p>" 
        
    };
    // email transport configuration

    var transport = await nodemailer.createTransport({
        service:"gmail",

        auth: {
            user: "nerolik60@gmail.com",
            pass: "5n5a171078"
        }
    });
    // send email
   await transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.reponse);
            res.send({message: true});
        }
    });
});
///finsend
router.post('/send-mailR', async(req, res) => {
    console.log('reponsAu');
    console.log(req.body.email)

    // email message options
    const mailOptions = {
        from:"nerolik60@gmail.com",
        to:req.body.email ,
        subject: 'Tunis santé',
        text:"bienvenue dans nos platforme tunisie santé on va traiter votre demande et dans 24 heures tu reçoit nos reponse" 
        
        
    };
    // email transport configuration

    var transport = await nodemailer.createTransport({
        service:"gmail",

        auth: {
            user: "nerolik60@gmail.com",
            pass: "5n5a171078"
        }
    });
    // send email
    await transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.reponse);
            res.send({message: true});
        }
    });
});
///send email message
router.post('/send-mailM', async(req, res) => {
    console.log('hhhhh');
    console.log(req.body.message)

    // email message options
    const mailOptions = {
        from:"nerolik60@gmail.com",
        to:req.body.email ,
        subject: 'Tunis santé',
        text:req.body.message
        
    };
    // email transport configuration

    var transport = await nodemailer.createTransport({
        service:"gmail",

        auth: {
            user: "nerolik60@gmail.com",
            pass: "5n5a171078"
        }
    });
    // send email
   await transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.reponse);
            res.send({message: true});
        }
    });
});
///f email






//voire tous patient
router.get('/voirEtudantNouv', async (req, res) => {
    var user = await userSchema.find({nouveaux:true}).lean();
    res.send({user:user,message:true})

});
//voire passient non nouveaux
router.get('/voirEtudantkdom', async (req, res) => {
    var user = await userSchema.find({nouveaux:false}).lean();
    res.send({user:user,message:true})

});
 ///nombre demandes
 router.get('/voirEtudantN', async (req, res) => {
    var user = await userSchema.find({nouveaux:true}).lean();

    res.send({nombr:user.length})

});
//registres

router.post('/register', async (req, res) => {
    try {
       

      
            var user = await userSchema.create(req.body);
                      console.log(user)
                               
            return res.send({message: true})

    } catch (error) {
        res.send(error.message)
    }

});

//modifP

router.put('/reponse/:id', async (req, res) => {
    console.log(req.params.id)
    console.log(5)
  
     
   var pat= await userSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
      console.log(pat)
   res.send({message:true})

})
module.exports = router;
//

