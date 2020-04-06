import userModel from '../model/user'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/index'
import moment from 'moment'
import debug from '../utils/debug.utils'

const NAMESPACE = `authenService-${moment.utc().toISOString()}`

export const getUserByAuthToken = async (token) => {
  try {
    const tokenWithoutBearer = token.substring('Bearer '.length)
    const { id } = jwt.verify(tokenWithoutBearer, JWT_SECRET)
    return await userModel.findById(id)
  }
  catch (err) {
    debug.error(NAMESPACE, '', err)
    throw err
  }
}
