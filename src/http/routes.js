const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Hello World')
    next()
  })
}

module.exports = routes
