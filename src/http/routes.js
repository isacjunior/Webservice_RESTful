const db = require('../services/mysql')

const routes = (server) => {
  server.get('categoria', (req, res, next) => {
    db.categories().all()
      .then(categories => {
        res.send(categories)
        next()
      })
      .catch(error => {
        console.error(error)
        next()
      })
  })

  server.post('categoria', (req, res, next) => {
    const { name } = req.params
    server.get('categoria', (req, res, next) => {
      db.categories().save(name)
        .then(categories => {
          res.send(categories)
          next()
        })
        .catch(error => {
          console.error(error)
          next()
        })
    })
  })

  // server.put('categoria', (req, res, next) => {
  //   res.send()
  //   next()
  // })
  // server.delete('categoria', (req, res, next) => {
  //   res.send()
  //   next()
  // })

  server.get('/', (req, res, next) => {
    res.send('Webservice com Node, Restify e MySql')
    next()
  })
}

module.exports = routes
