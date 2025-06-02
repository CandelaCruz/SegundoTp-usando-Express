import { Request, Response } from "express" 
import { Book } from "../models/booksModel"

//OBTENER TODOS LOS LIBROS
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

//OBTENER UN LIBRO POR ID
 const getBooksById = async (req: Request, res: Response): Promise<any> => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ success: false, message: "Book not found" });

    res.json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

//CREAR UN LIBRO
const createBooks = async (req: Request, res: Response): Promise<any> => {
  const { title, author, publishedYear, genre, available } = req.body;

  // Validación básica
  if (!title || !author) {
    return res.status(400).json({ success: false, message: "Title and author are required" });
  }

  try {
    const newBook = new Book({
      title,
      author,
      publishedYear,
      genre,
      available
    });

    await newBook.save();

    return res.status(201).json({
      success: true,
      data: newBook,
      message: "Book created successfully"
    });
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({ success: false, message: err.message });
  }
};

const updateBook = async () => {}

const deleteBook = async () => {}

export { getAllBooks, getBooksById, createBooks, updateBook, deleteBook }