const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'webservice'
})

const categoriesModule = require('./categories')({ connection })

module.exports = {
  categoies: () => categoriesModule
}
