module.exports = function notFoundApi(req, res, next) {
  res.statusCode = 404;
  res.json({
    msg: req.errorMsg || `Cannot ${req.method} ${req.url}`
  });
};