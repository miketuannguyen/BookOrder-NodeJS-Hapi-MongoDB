import orderModel from '../model/order'
import moment from 'moment'
import debug from '../utils/debug.utils'

const NAMESPACE = `orderService-${moment.utc().toISOString()}`

export const getOrderOfUserByOrderId = async (orderId, userId) => {
  try {
    return await orderModel.getOrderOfUserById(orderId, userId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const getAllOrder = async () => {
  try {
    const orderList = await orderModel.list();
    return orderList
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const getAllOrderByUserId = async (userId) => {
  try {
    return await orderModel.listByUserId(userId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const createOrder = async (userId, bookId) => {
  try {
    return await orderModel.createOrder(userId, bookId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const updateOrder = async (orderInstance, bookId) => {
  try {
    return await orderModel.updateOrder(orderInstance, bookId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const deleteOrder = async (orderInstance) => {
  try {
    return await orderModel.deleteOrder(orderInstance)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}

export const deletedAllOrderOfUser = async (userId) => {
  try {
    return await orderModel.deleteAllOrderOfUser(userId)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}
