
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')

const app = express();

const corsOptions = {
    origin: [process.env.CLIENT_URI, process.env.CLIENT_URI_PROD],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin', 'x-auth-token', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials'],
}
// middlewares

app.use(cors(corsOptions));
app.use(dotenv.config);

// enable pre-flight for all routes
// app.options('*', cors(corsOptions));





const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`))