const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const courses = [
  { id: '1', title: "JS" , Price: '30'},
  { id: '2', title: "Javascript", Price: '50' },
  { id: '3', title: "Python", Price: '40' },
]

//Middleware"
/*
- Authorize
-Authonticatenp
-Error checking
*/
function logger(req,res,next){
  console.log("Incoming request")
  //return res.status(404).send("Error Forbidden.")
  next()
}

function authorize(req,res,next){
  return res.status(404).json({
    msg: "Not Found"
  })
}

// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
//app.use(logger)  ប្រើលើគ្រប់ Function

app.get('/courses', logger, function (req, res) {
    console.log (req.query) //get query value from browser url
    return res.status(202).send("Class Course.")
})

// Allow user to create courses
//ទាញយកទិន្នន័យទាំងអស់ពីAPI
app.post('/courses', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

//ទាញយកទិន្នន័យពីAPI តាម​រយៈ ID
app.get('/courses/:id',coursecheck, (req, res) => {
  const id = req.params.id
  const course = courses.find((item) => {
      return item.id == id
  })
  return res.json(course)
})

function coursecheck(req,res,next){
  const id = req.params.id
  const course = courses.find((item) => {
      return item.id == id
  })
  if(!course){return res.status(404).send("Not Found this Course!")}
  next()
  
}

// Conventional function
app.get('/', function (req, res) {
    res.json({
        key: 'abcdef',
        id: '123456'
    })
})

// Arrow function
app.get('/shortcut', (req, res) => {
    res.json({
        message: "Test Get Url success."
    })
})

app.listen(3000, function () {
    console.log("Server is running on port 3000")
})