// Middleware to authorize user roles
exports.authorize = (roles) => {
    return (req, res, next) => {
      const userRole = req.user.role;
  
      if (!roles.includes(userRole)) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
  
      next();
    };
  };
  