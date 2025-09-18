const joi = require('joi');

exports.createProductSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    description: joi.string().required(),
    category: joi.string().required()
});

exports.updateProductSchema = joi.object({
    name: joi.string(),
    price: joi.number(),
    description: joi.string(),
    category: joi.string()
});

exports.validate = (schema, data) => {
  const { error, value } = schema.validate(data, { abortEarly: false });
  if (error) {
    return {
      success: false,
      errors: error.details.map((err) => ({
        field: err.path[0],
        message: err.message,
      })),
    };
  }
  return { success: true, value };
};