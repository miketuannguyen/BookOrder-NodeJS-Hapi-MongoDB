import * as orderService from '../service/order.service'
import * as bookService from '../service/book.service'
import * as authorizeService from '../service/authorize.service'
import Boom from 'boom'

export const getOrderOfUserByOrderId = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    const { orderId } = request.params

    const orderInstance = await orderService.getOrderOfUserByOrderId(orderId, userInstance._id)
    
    if (orderInstance) {
      return orderInstance
    }
  
    return Boom.badRequest(`order with id ${orderId} is not existed or is not yours or is not yours`)
  }

  return Boom.unauthorized('Invalid authorization token!')
}

export const getAllOrder = async (request, h) => {
  return await orderService.getAllOrder();
}

export const getAllOrderOfUser = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    return await orderService.getAllOrderByUserId(userInstance._id)
  }

  return Boom.unauthorized('Invalid authorization token!')
}

export const createOrderOfUser = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    const { bookId } = request.payload

    const bookInstance = await bookService.findById(bookId)

    if (bookInstance) {
      return await orderService.createOrder(userInstance._id, bookInstance._id)
    }

    return Boom.badRequest(`Book with id ${bookId} is not existed`)
  }

  return Boom.unauthorized('Invalid authorization token!')
}

export const updateOrderOfUserByOrderId = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    const { orderId } = request.params

    const orderInstance = await orderService.getOrderOfUserByOrderId(orderId, userInstance._id)
  
    if (orderInstance) {
      const { bookId } = request.payload

      const bookInstance = await bookService.findById(bookId)
    
      if (bookInstance) {
        return await orderService.updateOrder(orderInstance, bookInstance._id)
      }
    
      return Boom.badRequest(`Book with id ${bookId} is not existed`)
    }

    return Boom.badRequest(`Order with id ${orderId} is not existed`)
  }
  return Boom.unauthorized('Invalid authorization token!')
}

export const deletOrderOfUserByOrderId = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    const { orderId } = request.params

    const orderInstance = await orderService.getOrderOfUserByOrderId(orderId, userInstance._id)
  
    if (orderInstance) {
      return await orderService.deleteOrder(orderInstance)
    }

    return Boom.badRequest(`Order with id ${orderId} is not existed or is not yours`)
  }
  
  return Boom.unauthorized('Invalid authorization token!')
}

export const deleteAllOrderOfUser = async (request, h) => {
  const bearerToken = request.headers.authorization

  const userInstance = await authorizeService.getUserByAuthToken(bearerToken)

  if (userInstance) {
    return await orderService.deletedAllOrderOfUser(userInstance._id)
  }
  
  return Boom.unauthorized('Invalid authorization token!')
}
