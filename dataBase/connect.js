const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://webmaster:webmaster123@cluster0.jc0r9.mongodb.net/tunisieSanté ', 
{useNewUrlParser: true, 
useUnifiedTopology: true,
useFindAndModify: false
})
.then(()=>console.log('Successfully connected to database.'))
.catch((e)=>console.error('Error in connection',e));

module.exports = mongoose;