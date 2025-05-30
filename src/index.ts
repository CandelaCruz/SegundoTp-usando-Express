import express from 'express';
import { connectMongoDB } from "./config/mongo";
import { booksRouter } from "./routes/booksRouter";


process.loadEnvFile()

const PORT = process.env.PORT || 2000

const app = express()

app.use("api/books", booksRouter)

app.listen(PORT, () => {
  console.log( `Server running on port http://localhost: ${PORT}` )
  connectMongoDB()
})