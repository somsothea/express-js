const books = require('../models/book.js')

/**
 * Controller is a specific function to handle specific tasks
 */

function createBook(req, res) {
    const newBook = {
        id: req.body.id,
        title: req.body.title,
    }
    const exist = books.some((item) => {
        return item.id == newBook.id
    })
    if (exist) {
        return res.status(400).json({
            message: "CBook ID already existt"
        })
    }
    books.push(newBook)
    return res.json({
        operation: "Success",
        item: newBook
    })
}

function getBookById(req, res) {
    const id = req.params.id
    const book = books.find((item) => {
        return item.id == id
    })
    return res.json(book)
}

function getBooks(req, res) {
    return res.json(books)
}

function deleteBook(req, res) {
    const id = req.params.id
    const book = books.find((item) => {
        return item.id == id
    })
    if (book) {
        const index = books.findIndex((item) => {
            return item == book
        })
        console.log(index)
        books.splice(index, 1)
        return res.json({
            operation: "deleted",
            item: book
        })
    }
    return res.json("Book not found")
}

function patchBook(req, res) {
        const id = req.params.id
        const btitlle = req.body.title
        const book = books.find((item) => {
            return item.id == id
        })
        if (book) {
            const index = books.findIndex((item) => {
                return item == book
            })
            console.log(index)
            books[index].title = btitlle;
            return res.json({
                operation: "title updated",
                item: books
            })
        }
        return res.json("Book not found")     
}

module.exports = { createBook, getBookById, getBooks, deleteBook, patchBook }