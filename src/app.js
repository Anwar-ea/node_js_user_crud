const express = require('express');
const cors = require('cors')
require('./config/db-connection');
require('dotenv').config();
const {userRouter} = require('./routes/userRoutes')
const PORT = process.env.PORT ?? 8070;

const app = express(cors, {
    origin: '*'
});
app.use(express.json())
app.use('/api/user', userRouter);

app.get('/', (req,res) => {
    res.send('<h1>Server Started</h1>')
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} \n  click on this url tochek if its running http://localhost:${PORT} `);
    
})