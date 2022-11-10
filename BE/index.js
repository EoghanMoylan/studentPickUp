require('dotenv').config();
const express = require('express');
const helmet = require("helmet");
const app = express();
const db = require("./config/database");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
//helmet sets various HTTP headers adding some basic security (see https://www.securecoding.com/blog/using-helmetjs/)
app.use(helmet());

app.use('/reset', require('./components/reset/reset.routes'));
app.use('/students', require('./components/students/students.routes'));
// app.use('/classroom', require('./components/classroom/classroom.routes'));
// app.use('/carregs', require('./components/carregs/carregs.routes'));


// Start node server
const port = process.env.PORT;

const initApp = async () => {
    console.log("Testing the database connection..");
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};


initApp();