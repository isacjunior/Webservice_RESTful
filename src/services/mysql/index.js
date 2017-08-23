const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'webservice'
})

const errorHandler = (error, msg, rejectFuntion) => {
  console.error(error)
  rejectFuntion({ error: msg })
}

const categoriesModule = require('./categories')({ connection, errorHandler })
// const productsModule = require('./products')({ connection, errorHandler })

module.exports = {
  categories: () => categoriesModule
  // products: () => productsModule
}
