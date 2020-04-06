const basicResponse = {
  200: {
    description: 'Success',
  },
  400: {
    description: 'BadRequest',
  },
  404: {
    description: 'ResourceNotFound',
  },
  500: {
    description: 'InternalServerError',
  },
};

module.exports = basicResponse;
