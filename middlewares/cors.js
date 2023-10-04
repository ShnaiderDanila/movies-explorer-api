const { allowedCors, DEFAULT_ALLOWED_METHODS } = require('../utils/constants');

const cors = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['Access-Control-Request-Headers'];
  if (allowedCors.includes(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
    res.set('Access-Control-Allow-Credentials', true);
  }
  if (method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.set('Access-Control-Allow-Headers', requestHeaders);
  }
  next();
};

module.exports = cors;
