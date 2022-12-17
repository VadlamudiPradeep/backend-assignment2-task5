const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize = require('./util/database');
// const Product = require('./models/product');
// const User = require('./models/User');
const cors = require('cors');

const app = express();

//app.use(Product);
//app.use(User);
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user')

app.use(bodyParser.json({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
//app.use(shopRoutes);
  app.use('/user', userRoutes);

app.use(errorController.get404);

sequelize.sync()
.then(result =>{
  app.listen(8000,()=>{
    console.log("8000 port");
  });
}).catch((err)=>{
  console.log(err);
});