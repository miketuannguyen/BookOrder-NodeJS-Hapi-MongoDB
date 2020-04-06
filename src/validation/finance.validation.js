const Joi = require('joi');

const basicPayload = {
  symbol: Joi.string().required().description('Stock symbol')
};

const stockValidation = {
  symbol: {
    params: basicPayload
  }
}

module.exports = { stockValidation };
