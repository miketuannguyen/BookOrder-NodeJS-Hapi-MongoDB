import * as todoController from '../controller/todo.controller'
import basicResponse from './../response'

const todoRoute = [
  {
    method: 'GET',
    path: '/todo/{todoId}',
    config: {
      tags: ['api'],
      description: 'get todo of user by todoId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoController.getTodoOfUserByTodoId
  },
  {
    method: 'GET',
    path: '/todo',
    config: {
      tags: ['api'],
      description: 'get all todo of user',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoController.getAllTodoOfUser
  },
  {
    method: 'POST',
    path: '/todo',
    config: {
      tags: ['api'],
      description: 'create todo of user by userId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoController.createTodoOfUser
  },
  {
    method: 'PUT',
    path: '/todo/{todoId}',
    config: {
      tags: ['api'],
      description: 'update todo of user by todoId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoController.updateTodoOfUserByTodoId
  },
  {
    method: 'DELETE',
    path: '/todo/{todoId}',
    config: {
      tags: ['api'],
      description: 'delete todo of user by todoId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoController.deleteTodoOfUserByTodoId
  },
  {
    method: 'DELETE',
    path: '/todo',
    config: {
      tags: ['api'],
      description: 'delete all todo of user',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: todoController.deleteAllTodoOfUser
  }
]

export default todoRoute
