const express = require('express')
const { createBook, getBookById, getBooks, deleteBook, patchBook } = require('../controller/book.js')
const router = express.Router();

router.post('/', createBook)
router.get('/', getBooks)
router.get('/:id', getBookById)
router.delete('/:id', deleteBook)
router.patch('/:id', patchBook)

module.exports = router