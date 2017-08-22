const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'webservice'
})

const categories = new Promise((resolve, reject) => {
  connection.query('SELECT * FROM categories', (error, results) => {
    if (error) {
      reject(error)
    }
    resolve({ categories: results })
  })
})

module.exports = categories
