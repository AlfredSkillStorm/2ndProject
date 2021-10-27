const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//app.use('/movies', require('./routes/movie'));

app.get('/', (req, res) => {
    
});

app.get('/helloThere', (req, res) => {
    console.log('Hello there >:3');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});