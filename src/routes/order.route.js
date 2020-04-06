import * as orderController from '../controller/order.controller'
import basicResponse from './../response'

const orderRoute = [
  {
    method: 'GET',
    path: '/order/{orderId}',
    config: {
      tags: ['api'],
      description: 'get order of user by orderId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: orderController.getOrderOfUserByOrderId
  },
  {
    method: 'GET',
    path: '/order',
    config: {
      tags: ['api'],
      description: 'get all order of user',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: orderController.getAllOrderOfUser
  },
  {
    method: 'POST',
    path: '/order',
    config: {
      tags: ['api'],
      description: 'create order of user by userId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: orderController.createOrderOfUser
  },
  {
    method: 'PUT',
    path: '/order/{orderId}',
    config: {
      tags: ['api'],
      description: 'update order of user by orderId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: orderController.updateOrderOfUserByOrderId
  },
  {
    method: 'DELETE',
    path: '/order/{orderId}',
    config: {
      tags: ['api'],
      description: 'delete order of user by orderId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: orderController.deletOrderOfUserByOrderId
  },
  {
    method: 'DELETE',
    path: '/order',
    config: {
      tags: ['api'],
      description: 'delete all order of user',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: orderController.deleteAllOrderOfUser
  }
]

export default orderRoute
