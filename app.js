const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
  res.send('awesome! it works')
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: 'Not found'}})
})

const listener = (err) => {
  if (err) console.log(err)
  console.log(`App listening on port ${PORT}`)
}

app.listen(PORT, listener)
