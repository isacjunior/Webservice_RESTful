const db = require('../services/mysql')

const routes = (server) => {
  server.get('categoria', (req, res, next) => {
    db.categories().all()
      .then(categories => {
        res.send(categories)
      })
      .catch(error => {
        res.send(error)
      })
    next()
  })

  server.post('categoria', (req, res, next) => {
    const { name } = req.params
    db.categories().save(name)
      .then(categories => {
        res.send(categories)
      })
      .catch(error => {
        res.send(error)
      })
    next()
  })

  server.put('categoria', (req, res, next) => {
    const { name, id } = req.params
    db.categories().update(name, id)
      .then(categories => {
        res.send(categories)
      })
      .catch(error => {
        res.send(error)
      })
    next()
  })

  server.get('/', (req, res, next) => {
    res.send('Webservice com Node, Restify e MySql')
    next()
  })
}

module.exports = routes
