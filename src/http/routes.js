const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Hello World')
    next()
  })

  server.get('categoria', (req, res, next) => {
    res.send('Categoria')
    next()
  })
  server.post('categoria', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })
  // server.put('categoria', (req, res, next) => {
  //   res.send()
  //   next()
  // })
  // server.delete('categoria', (req, res, next) => {
  //   res.send()
  //   next()
  // })
}

module.exports = routes
