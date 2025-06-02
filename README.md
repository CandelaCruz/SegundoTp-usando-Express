
````markdown
# 📚 **SegundoTp - usando Express**

Este proyecto es una **API REST** construida con **Express.js**, **MongoDB** y **TypeScript**, que permite gestionar una colección de libros. 📖

---

## 🚀 **Características**

- 📘 **CRUD completo para libros:** Crear, Leer, Actualizar y Eliminar.  
- 🛠️ **Conexión a MongoDB** utilizando Mongoose.  
- 🧪 **Validaciones básicas** para los datos de entrada.  
- 📂 **Estructura modular** con separación de rutas y controladores.  
- 🌐 **API RESTful** siguiendo buenas prácticas.  

---

## ⚙️ **Instalación y ejecución local**

1. **Clonar el repositorio**  
```bash
git clone https://github.com/CandelaCruz/SegundoTp-usando-Express.git
cd SegundoTp-usando-Express
````

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
MONGODB_URI=mongodb://localhost:27017/nombre-de-tu-base
PORT=2000
```

> Reemplaza `nombre-de-tu-base` con el nombre que quieras usar para tu base de datos.

4. **Ejecutar la API en modo desarrollo**

```bash
npm run dev
```

La API estará disponible en: `http://localhost:2000`

---

## 🏗️ **Estructura del Proyecto**

```
├── src/
│   ├── config/
│   │   └── mongo.ts
│   ├── controllers/
│   │   └── booksController.ts
│   ├── models/
│   │   └── booksModel.ts
│   ├── routes/
│   │   └── booksRouter.ts
│   └── index.ts
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📬 **Endpoints de la API**

| Método | Ruta             | Descripción              |
| ------ | ---------------- | ------------------------ |
| GET    | `/api/books`     | Obtener todos los libros |
| GET    | `/api/books/:id` | Obtener un libro por ID  |
| POST   | `/api/books`     | Crear un nuevo libro     |
| PUT    | `/api/books/:id` | Actualizar un libro      |
| DELETE | `/api/books/:id` | Eliminar un libro        |

---

## 📝 **Ejemplo de Objeto Libro**

```json
{
  "title": "Cien años de soledad",
  "author": "Gabriel García Márquez",
  "publishedYear": 1967,
  "genre": "Realismo mágico",
  "available": true
}
```

---

## 🧰 **Tecnologías Utilizadas**

* Node.js 🟢
* Express.js ⚡
* TypeScript 🟦
* MongoDB 🍃
* Mongoose 🧬

---

✨ ¡Gracias por visitar este proyecto! ✨




