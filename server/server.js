require('dotenv').config
const cors = require('cors');
const session = require('express-session');
const express = require('express');

const PORT = process.env.PORT || 4000;
const ctrl = require('./controllers/checkout');
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb'}));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'asecret',
    cookie: { maxAge: 86400000 }
  })
)

app.use((req, res, next) => {
  console.log('route hit', req?.path);
  next();
})

app.get('/api/checkout/recordItems', ctrl.get);
app.post('/api/checkout/addItem', ctrl.add);
app.delete('/api/checkout/removeItem', ctrl.remove);

app.listen(PORT, _ => console.log(`Running on 4000`))