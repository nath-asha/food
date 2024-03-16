// validation.js

// Middleware to validate request body
exports.validateBody = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body);
  
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      next();
    };
  };
  
  // Middleware to validate request parameters
  exports.validateParams = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.params);
  
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      next();
    };
  };
  
  // Middleware to validate request query parameters
  exports.validateQuery = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.query);
  
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      next();
    };
  };
  