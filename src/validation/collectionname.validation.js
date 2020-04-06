const Joi = require('joi');

const basicPayload = {
  name: Joi.string().required().description('the record name')
};

const idPayload = {
  id: Joi.string().required().description('record id')
};

const validations = {
  name: { payload: Joi.object(basicPayload) },
};

const deleteValidation = {
  id: {
    params: idPayload
  }
};

module.exports = { validations, deleteValidation };
