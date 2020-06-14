const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/data',
    createProxyMiddleware({
      target: "http://ddragon.leagueoflegends.com/cdn/10.12.1/",
      changeOrigin: true
    })
  )

  app.use(
    '/lol',
    createProxyMiddleware({
      target: 'https://kr.api.riotgames.com/',
      changeOrigin: true
    })
  )
}