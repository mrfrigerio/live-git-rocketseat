const express = require('express')
const port = 3333
const app = express()

app.get('/teste', (req, res) => {
  return res.json({ hello: 'world!' })
})

app.listen(3333, () => console.log(`Servidor rodando na porta ${port}`))