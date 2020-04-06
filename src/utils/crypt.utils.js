const { SALT_ROUNDS, JWT_SECRET, TOKEN_EXPIRED_TIME } = require('../config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')

const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_ROUNDS))
}

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

const createAuthToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: TOKEN_EXPIRED_TIME })
}

module.exports = {
  hashPassword,
  comparePassword,
  createAuthToken
}
