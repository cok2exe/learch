const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/data',
    createProxyMiddleware({
      target: `http://ddragon.leagueoflegends.com/cdn/${process.env.REACT_APP_VERSION}/`,
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