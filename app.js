const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Awesome! It works!')
})

const listener = (err) => {
  if (err) console.log(err)
  console.log(`Listening on Port ${PORT}!`);
}
app.listen(PORT, listener)
