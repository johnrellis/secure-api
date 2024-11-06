import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    // Get token from Authorization header
    // will split into ["Bearer", "xxxx.yyyy.zzzz"]
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Add the decoded payload to the request for access in other routes
      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      console.log(error);
      return res.status(403).json({ message: 'Token invalid' });
    }
  };

export { verifyToken };