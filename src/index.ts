import express from 'express';
import { connectMongoDB } from "./config/mongo";

process.loadEnvFile()

const PORT = process.env.PORT || 2000

const app = express()

app.listen(PORT, () => {
  console.log( `Server running on port http://localhost: ${PORT}` )
  connectMongoDB()
})