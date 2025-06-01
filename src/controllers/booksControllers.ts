import { Request, Response } from "express" 
import { Book } from "../models/booksModel"

const getAllBooks = async (req: Request, res: Response): Promise<any> => {
  try {
    const books = await Book.find()
    return res.json({
      sucess: true,
      data: books,
      message: "Books found successfully"
    })
  } catch (error) {
    const err = error as Error
    return res.status(500).json({
      sucess: false,
      message: err.message
    })
  }
}


const getBooksById = async () => {}

const createBooks = async () =>{}  

const updateBook = async () => {}

const deleteBook = async () => {}

export { getAllBooks, getBooksById, createBooks, updateBook, deleteBook }