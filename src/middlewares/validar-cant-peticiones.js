import rateLimit from 'express-rate-limit'

const apiLimiter = rateLimit ({
    windowMs: 15 * 60 * 1000,
    max: 0
})

export default apiLimiter