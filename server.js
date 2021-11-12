const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.render('home')
})

app.set('view engine', 'pug')
app.set('views', './server/views')

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Cubari is listening on port ${port}`)
})
