import todoModel from '../model/todo'
import moment from 'moment'
import debug from '../utils/debug.utils'

const NAMESPACE = `todoService-${moment.utc().toISOString()}`

export const getTodoOfUserByTodoId = async (todoId, userId) => {
  try {
    const todoInstance = await todoModel.getTodoOfUserById(todoId, userId)
    return todoInstance
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const getAllTodo = async () => {
  try {
    const todoList = await todoModel.list();
    return todoList
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const getAllTodoByUserId = async (userId) => {
  try {
    return await todoModel.listByUserId(userId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const createTodo = async (userId, summary, description) => {
  try {
    const todoInstance = await todoModel.createByUserId(userId, { summary, description })
    return todoInstance
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const updateTodo = async (todoInstance, newSummary, newDescription) => {
  try {
    return await todoModel.updateTodo(todoInstance, newSummary, newDescription)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const deleteTodo = async (todoInstance) => {
  try {
    return await todoModel.deleteTodo(todoInstance)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const deletedAllTodoOfUser = async (userId) => {
  try {
    return await todoModel.deleteAllTodoOfUser(userId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}
