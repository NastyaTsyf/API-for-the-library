const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const { PORT = 3005,
    API_URL = 'http://localhost',
    MONGO_URL = 'mongodb://localhost:27017/myDB'
} = process.env;

const app = express();

mongoose.connect(MONGO_URL, console.log('Connected to MongoDB')).catch(error => handleError(error));

app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.use(cors());
app.use(bodyParser.json());
app.use(userRouter, bookRouter);

app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});

