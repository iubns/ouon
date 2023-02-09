import express from 'express'
import bodyParser from 'body-parser'
import apiRouter from './routes'
import dataSource from './model/dataSource'

const app = express()
const port = 8000

app.use(bodyParser.json())

const router = express.Router()
app.use('/',apiRouter)

app.listen(port, async () => {
    await Promise.all([dataSource.initialize()]);
    //dataSource.dropDatabase()
    console.log('start server')
})

app.get('/', async (req, res) => {
    res.send('running server')
})