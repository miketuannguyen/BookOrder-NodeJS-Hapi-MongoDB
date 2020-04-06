import userModel from '../model/user'
import moment from 'moment'
import debug from '../utils/debug.utils'

const NAMESPACE = `userService-${moment.utc().toISOString()}`

export const getAllUser = async () => {
  try {
    return await userModel.list()
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const getUserByUserId = async (userId) => {
  try {
    return await userModel.findById(userId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const createUser = async (username, firstName, lastName, password) => {
  try {
    const userInstance = await userModel.create({ username, firstName, lastName, password })
    delete userInstance.password
    return userInstance
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const findUserByUsername = async (username) => {
  try {
    const userInstance = await userModel.findByUsername(username)
    if (userInstance) {
      delete userInstance.password
    }
    return userInstance
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const authenticate = async (username, password) => {
  try {
    const userInstance = await userModel.findByUsername(username)
    if (userInstance && userInstance.validPassword(password)) {
      delete userInstance.password
      return userInstance
    }
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const activateUser = async (userInstance) => {
  try {
    return await userModel.activateUser(userInstance)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const updateUser = async (userInstance, newUsername, newFirstName, newLastName) => {
  try {
    return await userModel.updateUser(userInstance, newUsername, newFirstName, newLastName)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const deleteUser = async (userInstance) => {
  try {
    return await userModel.deleteUser(userInstance)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const deleteAllUsers = async () => {
  try {
    return await userModel.deleteAllUsers()
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}
