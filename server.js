const express = require('express'); // because we cant use import  it call comon js
const connectDB = require('./config/db');

const app = express(); // initialise express in app object

// connecte to database
connectDB();

app.get('/', (req, res) => res.json({ msg : `welcome to the contact keeper api`}));

// Definde our routes

app.use('/api/users', require('./routes/users'))
app.use('/api/contats', require('./routes/contacts'))
app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000 ;  

app.listen(PORT, () => console.log(`server started on port  ${PORT}`)) 