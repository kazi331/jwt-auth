const clientURI = process.env.NODE_ENV === 'dev' ? process.env.CLIENT_URI : process.env.CLIENT_URI_PROD

module.exports = { clientURI };