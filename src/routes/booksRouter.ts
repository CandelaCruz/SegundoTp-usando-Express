import { Router } from "express";
import { getAllBooks, getBooksById, createBooks,updateBook, deleteBook } from "../controllers/booksControllers";

//Defino el router
const booksRouter = Router();

//Defino la ruta GET para obtener todos los libros
booksRouter.get("/", getAllBooks)

//Defino la ruta GET para obtener un libro por id
booksRouter.get("/:id", getBooksById)

//Defino la ruta POST para crear un libro
booksRouter.post("/", createBooks)

//Defino la ruta PATCH para actualizar un libro
booksRouter.patch("/:id", updateBook)

//Defino la ruta DELETE para eliminar un libro por su ID
booksRouter.delete("/:id", deleteBook)



export { booksRouter }