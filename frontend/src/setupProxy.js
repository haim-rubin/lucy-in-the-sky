const { createProxyMiddleware } = require('http-proxy-middleware')
const backendUrl = 'http://localhost:5000'
module.exports = function(app) {

  app.use(
    '/api',createProxyMiddleware( {
      target: backendUrl,
      logLevel: 'debug',
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}