require('dotenv').config
const cors = require('cors');
const session = require('express-session');
const express = require('express');

const ctrl = require('./controllers/checkout');

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'asecret',
    cookie: { maxAge: 86400000 }
  })
)

app.get('/api/checkout/recordItems', ctrl.get);
app.post('/api/checkout/addItem', ctrl.add);
app.delete('/api/checkout/removeItem', ctrl.remove);

app.listen(4000, _ => console.log(`Running on 5500`))