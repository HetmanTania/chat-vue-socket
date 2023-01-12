require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, { cors: { origin: "*" } }); // на будущее =)
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./routers/index');
const PORT = process.env.PORT || 5000;

// setting
app.use(
    cors({ origin: '*', credentials: true, origin: process.env.CLIENT_URL }),
    express.json(),
    express.urlencoded({ extended: true }),
    cookieParser()
)

app.use('/', router);

const startServer = () => {
    try {
        mongoose.set('strictQuery', false); // новый параметр который нужен как я понял для последней версии mongoose
        mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
        server.listen(PORT, () => console.log(`Server start on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
    }

}

startServer();