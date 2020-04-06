import * as bookController from '../controller/book.controller'
import basicResponse from './../response'

const bookRoute = [
  {
    method: 'GET',
    path: '/book/{bookId}',
    config: {
      tags: ['api'],
      description: 'get book by bookId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: bookController.getBookByBookId
  },
  {
    method: 'GET',
    path: '/book',
    config: {
      tags: ['api'],
      description: 'get all book',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: bookController.getAllBook
  },
  {
    method: 'POST',
    path: '/book',
    config: {
      tags: ['api'],
      description: 'create book',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: bookController.createBook
  },
  {
    method: 'PUT',
    path: '/book/{bookId}',
    config: {
      tags: ['api'],
      description: 'update book by bookId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: bookController.updateBookByBookId
  },
  {
    method: 'DELETE',
    path: '/book/{bookId}',
    config: {
      tags: ['api'],
      description: 'delete book by bookId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: bookController.deleteBookByBookId
  },
  {
    method: 'DELETE',
    path: '/book',
    config: {
      tags: ['api'],
      description: 'delete all book',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: bookController.deleteAllBook
  }
]

export default bookRoute
