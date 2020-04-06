import bookModel from '../model/book'
import moment from 'moment'
import debug from '../utils/debug.utils'

const NAMESPACE = `userService-${moment.utc().toISOString()}`

export const findById = async (bookId) => {
  try {
    return await bookModel.findById(bookId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const getAllBook = async () => {
  try {
    return await bookModel.list()
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const createBook = async (bookInfo) => {
  try {
    return await bookModel.createBook(bookInfo)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const updateBook = async (bookInstance, newBookInfo) => {
  try {
    return await bookModel.updateBook(bookInstance, newBookInfo)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const deleteBook = async (bookInstance) => {
  try {
    return await bookModel.deleteBook(bookInstance)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const deleteAll = async () => {
  try {
    return await bookModel.deleteAll()
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}
