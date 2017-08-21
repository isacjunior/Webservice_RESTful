const server = require('./server')

server.get('/', (req, res, next) => {
  res.send('Hello World')
  next()
})

server.listen('9001')
