module.exports = function error500(err, req, res, next) {
  res.statusCode = 500;
  return res.json({
    msg: err.message
  });
};