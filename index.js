const express  = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes  = require('./Routes/userRoutes')


const app = express();
require ('dotenv').config();

app.use(cors());
app.use(express.json()); 

app.use('/api/auth', userRoutes)


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connection to Db successful');
}).catch((err) => {
    console.log(err);
}) 

const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});