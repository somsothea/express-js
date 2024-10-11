const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const asyncHandler = require('express-async-handler')
const courseRouter = require('./src/routes/course.js')
const bookRouter = require('./src/routes/book.js')
const { logger, handleError } = require('./src/middlewares/index.js')


// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(logger)

app.use('/courses', courseRouter)
app.use('/books', bookRouter)

app.use(handleError)

app.listen(3000, function () {
    console.log("Server is running on port 3000")
})