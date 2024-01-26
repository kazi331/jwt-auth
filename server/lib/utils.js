const clientURI = process.env.NODE_ENV === 'dev' ? process.env.CLIENT_URI : process.env.CLIENT_URI_PROD
const corsOptions = {
    origin: ['http://localhost:3000', process.env.CLIENT_URI, process.env.CLIENT_URI_PROD],
    // origin: '*', // allow all origins
    credentials: true,
}
module.exports = { clientURI, corsOptions };