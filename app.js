require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const userroutes = require('./routes/user.routes');
const artistroutes = require('./routes/artist.routes');
const trackroutes = require('./routes/track.routes');
const albumroutes = require('./routes/album.routes');
const favouriteRoutes = require('./routes/favourite.route');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));

app.use('/' , userroutes);
app.use('/' , artistroutes);
app.use('/' , trackroutes);
app.use('/' , albumroutes);
app.use('/' , favouriteRoutes);

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('Connected to database successfully')
}).catch(err =>{
    console.log(err.message)
})

app.listen(process.env.PORT , ()=>{
    console.log(`Server listening to the port ${process.env.PORT}`);
})