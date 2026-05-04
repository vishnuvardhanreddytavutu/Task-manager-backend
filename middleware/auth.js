const jwt = require("jsonwebtoken");

module.exports = (roles = []) => {
  return (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = header.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // 🔐 ROLE CHECK
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ error: "Access denied" });
      }

      next();
    } catch (err) {
      res.status(401).json({ error: "Invalid token" });
    }
  };
};