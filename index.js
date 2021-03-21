import express from 'express';
import bodyParser from 'body-parser';

import usersRouter from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen( PORT, () => console.log(`Server is running on ${PORT}`) );

app.get('/', (req, res) => {
    res.send(`HELLO FROM PORT ${PORT}`);
});

app.use('/users', usersRouter);