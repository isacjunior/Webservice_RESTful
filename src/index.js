const restify = require('restify')
const server = restify.createServer()

server.get('/', (req, res, next) => {
  res.send('Hello World')
  next()
})

server.listen('9001')
