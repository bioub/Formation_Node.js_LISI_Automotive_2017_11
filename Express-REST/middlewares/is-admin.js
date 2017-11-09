module.exports = function isAdmin(req, res, next) {
  if (false) { // PAS ADMIN
    res.statusCode = 403;
    return res.json({
      msg: 'Unauthorized'
    })
  }
  next();
};