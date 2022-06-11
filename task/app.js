const express=require(`express`)
const app=express()
const PORT=8000
// const PORT=process.env.port
const cors=require('cors')
const userController=require('./controller/userController')
const booksController=require('./controller/booksController')

const middleware=require('./middleware/auth')
// const PORT=process.env.PORT
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())




// --------------------SQL Endpoints-----------------------------







app.post(`/register`,(req,res)=>{
    userController.userRegister(req,res)
})
app.post(`/signin`,(req,res)=>{
    userController.signin(req,res)
})

app.post('/addbook',middleware.userAuth,(req,res)=>{
    booksController.addBook(req,res)
})
app.get('/getbooks',middleware.userAuth,(req,res)=>{ 
    booksController.getAllBooks(req,res)
})
app.put('/updatebook',middleware.userAuth,(req,res)=>{ 
    booksController.updateBook(req,res)
})
app.get('/getBookById',middleware.userAuth,(req,res)=>{
    booksController.getbook(req,res)
})
app.get('/searchbook',middleware.userAuth,(req,res)=>{
    booksController.searchbookByAuthorName(req,res)
})






// ------------------------MongoDb Endpoints-----------------







app.get(`/test`,(req,res)=>{
    res.status(200).send(`hello bro`)
})



app.listen(PORT, (() => {
    console.log(`port ` + PORT)
})) 