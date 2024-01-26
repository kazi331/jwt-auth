
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');


const app = express();

// middlewares
require('dotenv').config()
// app.options('*', cors(corsOptions));
const corsOptions = {
    origin: ['http://localhost:3000', process.env.CLIENT_URI, process.env.CLIENT_URI_PROD],
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// enable pre-flight for all routes

// routes
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === 'someone@gmail.com' && password === 'Pa$$w0rd!') {
            res.cookie('token', Math.random() * 100, {
                domain: 'localhost',
                path: '/',
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            });
            res.status(200).json({ success: true, message: 'logged in' });
        } else {
            res.status(401).json({ success: false, message: 'invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'server error' });
    }
})

app.get('/logout', (req, res) => {
    res.send({ success: true, message: 'Logged out' })
});






const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`))

module.exports = app;