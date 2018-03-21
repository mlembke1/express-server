const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Awesome! It works again!')
})

const listener = (err) => {
  if (err) console.log(err)
  console.log(`Awesome! Listening on port ${PORT}`);
}

app.listen(PORT, listener)
