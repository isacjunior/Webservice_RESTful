const categories = (deps) => {
  return {

    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar as categorias', reject)
            return false
          }
          console.log(results)
          resolve({ categories: results })
        })
      })
    },
    save: (name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('INSERT INTO categories (name) VALUES (?)', [name], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao inserir ${name} nas categorias`, reject)
            return false
          }
          resolve({ category: { name, id: results.insertId } })
        })
      })
    },
    update: (name, id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao atualizar a categoria ${name}`, reject)
            return false
          }
          resolve({ category: { name } })
        })
      })
    },
    del: () => {}
  }
}

module.exports = categories
