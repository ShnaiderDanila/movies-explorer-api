const { rateLimit } = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: { message: 'Слишком много запросов, пожалуйста повторите попытку позже' },
});

module.exports = rateLimiter;
