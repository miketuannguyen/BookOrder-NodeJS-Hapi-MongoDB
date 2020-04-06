import * as todoService from '../service/todo.service'
import * as authorizeService from '../service/authorize.service'
import Boom from 'boom'

export const getTodoOfUserByTodoId = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    const { todoId } = request.params

    const todoInstance = await todoService.getTodoOfUserByTodoId(todoId, userInstance._id)
    
    if (todoInstance) {
      return todoInstance
    }
  
    return Boom.badRequest(`Todo with id ${todoId} is not existed or is not yours or is not yours`)
  }

  return Boom.unauthorized('Invalid authorization token!')
}

export const getAllTodo = async (request, h) => {
  return await todoService.getAllTodo();
}

export const getAllTodoOfUser = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    return await todoService.getAllTodoByUserId(userInstance._id)
  }

  return Boom.unauthorized('Invalid authorization token!')
}

export const createTodoOfUser = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    const { summary, description } = request.payload
    return await todoService.createTodo(userInstance._id, summary, description)
  }

  return Boom.unauthorized('Invalid authorization token!')
}

export const updateTodoOfUserByTodoId = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    const { todoId } = request.params

    const todoInstance = await todoService.getTodoOfUserByTodoId(todoId, userInstance._id)
  
    if (todoInstance) {
      const { summary, description } = request.payload;

      return await todoService.updateTodo(todoInstance, summary, description)
    }

    return Boom.badRequest(`Todo with id ${todoId} is not existed or is not yours`)
  }

  return Boom.unauthorized('Invalid authorization token!')
}

export const deleteTodoOfUserByTodoId = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    const { todoId } = request.params

    const todoInstance = await todoService.getTodoOfUserByTodoId(todoId, userInstance._id)
  
    if (todoInstance) {
      return await todoService.deleteTodo(todoInstance)
    }

    return Boom.badRequest(`Todo with id ${todoId} is not existed or is not yours`)
  }
  
  return Boom.unauthorized('Invalid authorization token!')
}

export const deleteAllTodoOfUser = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    return await todoService.deletedAllTodoOfUser(userInstance._id)
  }
  
  return Boom.unauthorized('Invalid authorization token!')
}
