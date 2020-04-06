const axios = require('axios');

const prepareConfig = (config = {}) => {
  config.method = config.method || 'get';
  config.responseType = config.responseType || 'json';
  config.headers = config.headers || {};
  config.url = config.url || '';
  
  return config;
};

const request = async (config = {}) => {
  try {
    const { data } = await axios(prepareConfig(config));
    return data;
  }
  catch (error) {
    throw error;
  }
};

module.exports = request;
