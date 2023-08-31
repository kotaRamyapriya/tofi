module.exports = (req, res, next) => {
    // Check if user is an admin
    // Use req.user and verify if the user has admin role
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ msg: 'Access denied' });
    }
  };
  