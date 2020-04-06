import * as userController from '../controller/user.controller'
import basicResponse from './../response'

const userRoute = [
  {
    method: 'GET',
    path: '/user',
    config: {
      tags: ['api'],
      description: 'get all user',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.getAllUser
  },
  {
    method: 'GET',
    path: '/user/{userId}',
    config: {
      tags: ['api'],
      description: 'get user by userId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.getUserByUserId
  },
  {
    method: 'POST',
    path: '/user',
    config: {
      tags: ['api'],
      description: 'register users',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.registerUser
  },
  {
    method: 'POST',
    path: '/user/login',
    config: {
      tags: ['api'],
      description: 'login user',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.loginUser
  },
  {
    method: 'PUT',
    path: '/user/{userId}',
    config: {
      tags: ['api'],
      description: 'update user by userId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.updateUserByUserId
  },
  {
    method: 'PUT',
    path: '/user/{userId}:activate',
    config: {
      tags: ['api'],
      description: 'activate user by userId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.activateUser
  },
  {
    method: 'DELETE',
    path: '/user',
    config: {
      tags: ['api'],
      description: 'delete all users',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.deleteAllUsers
  },
  {
    method: 'DELETE',
    path: '/user/{userId}',
    config: {
      tags: ['api'],
      description: 'delete user by userId',
      plugins: {
        'hapi-swagger': {
          responses: basicResponse
        }
      }
    },
    handler: userController.deleteUserByUserId
  }
]

export default userRoute
