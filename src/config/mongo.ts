import { connect } from "mongoose";
process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectMongoDB = async () => {
  try {
    await connect(URI_DB)
    console.log("Database connected")
  } catch (error) {
    console.log("Database not connected")
  }
}
export { connectMongoDB }