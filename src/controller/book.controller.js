import * as bookService from '../service/book.service'
import Boom from 'boom'

export const getBookByBookId = async (request, h) => {
  const { bookId } = request.params
  const bookInstance = await bookService.findById(bookId)
  if (bookInstance) {
    return bookInstance
  }

  return Boom.badRequest(`Book with id ${bookId} is not existed`)
}

export const getAllBook = async (request, h) => {
  return await bookService.getAllBook()
}

export const createBook = async (request, h) => {
  const bookInfo = request.payload
  return await bookService.createBook(bookInfo)
}

export const updateBookByBookId = async (request, h) => {
  const { bookId } = request.params

  const bookInstance = await bookService.findById(bookId)
  if (bookInstance) {
    const bookInfo = request.payload
    return bookService.updateBook(bookInstance, bookInfo)
  }

  return Boom.badRequest(`Book with id ${bookId} is not existed`)
}

export const deleteBookByBookId = async (request, h) => {
  const { bookId } = request.params

  const bookInstance = await bookService.findById(bookId)
  if (bookInstance) {
    return bookService.deleteBook(bookInstance)
  }
}

export const deleteAllBook = async (request, h) => {
  return await bookService.deleteAll()
}
