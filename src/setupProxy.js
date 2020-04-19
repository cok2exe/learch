const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/data',
    createProxyMiddleware({
      target: "http://ddragon.leagueoflegends.com/cdn/10.8.1/",
      changeOrigin: true
    })
  )
}