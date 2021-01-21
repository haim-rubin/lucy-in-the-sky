const express = require('express')
const bodyParser = require('body-parser')
const httpStatus = require('http-status')
const { getImages } = require('./APIs/3rdParty')
const { getUserIsFavories, setUserIsFavories } = require('./APIs/local')
const app = express()
const port = 5000
app.use(bodyParser.json())

app.get('/images', (req, res) => {
  getImages()
    .then(list => {
      res.json({ list })
    })
    .catch(error => {
      console.error(error)
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error during established your request', list: [] })
    })
})

app.put('/images/:imageId/favorites', (req, res) => {
  const { imageId } = req.params
  const { isFavorite } = req.body

  setUserIsFavories({ imageId, isFavorite })
    .then(() => getUserIsFavories())
    .then(favorites => {
      res.json({ favorites })
    })
    .catch(error => {
      console.error(error)
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error during established your request', favorites: {} })
    })
})

app.get('/images/favorites', (req, res) => {
  
  getUserIsFavories({})
    .then(favorites => {
      res.json({ favorites })
    })
    .catch(error => {
      console.error(error)
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error during established your request', favorites: {} })
    })
})

app.listen(port, () => {
  console.log(`Backend istening at http://localhost:${port}`)
})