import * as userService from '../service/user.service'
import * as authorizeService from '../service/authorize.service'
import crypt from '../utils/crypt.utils'
import Boom from 'boom'

export const getAllUser = async (request, h) => {
  return await userService.getAllUser()
}

export const getUserByUserId = async (request, h) => {
  const { userId } = request.params

  const userInstance = await userService.getUserByUserId(userId)
  if (userInstance) {
    return userInstance
  }
  return Boom.badRequest(`User with id ${userId} is not existed`)
}

export const registerUser = async (request, h) => {
  const { username, firstName, lastName, password } = request.payload
  const userInstance = await userService.findUserByUsername(username)
  if (!userInstance) {
    return await userService.createUser(username, firstName, lastName, password)
  }
  return Boom.badRequest('Username is already in use')
}

export const loginUser = async (request, h) => {
  const { username, password } = request.payload

  const userInstance = await userService.authenticate(username, password)
  if (userInstance) {
    if (userInstance.isActive) {
      const token = crypt.createAuthToken(userInstance._id)
      const response = { userInstance, token }
      return response
    }
    return Boom.unauthorized('User isnt activated yet')
  }
  return Boom.unauthorized('Invalid username or password')
}

export const activateUser = async (request, h) => {
  const { userId } = request.params

  const userInstance = await userService.getUserByUserId(userId)
  if (userInstance) {
    return await userService.activateUser(userInstance)
  }
  return Boom.badRequest(`User with id ${userId} is not existed`)
}

export const updateUserByUserId = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    const { username, firstName, lastName } = request.payload
    return await userService.updateUser(userInstance, username, firstName, lastName)
  }

  return Boom.unauthorized('Invalid authorization token!')
}

export const deleteUserByUserId = async (request, h) => {
  const { userId } = request.params

  const userInstance = await userService.getUserByUserId(userId)
  if (userInstance) {
    return await userService.deleteUser(userInstance)
  }
  return Boom.badRequest(`User with id ${userId} is not existed`)
}

export const deleteAllUsers = async (request, h) => {
  return await userService.deleteAllUsers()
}
