module.exports = (req, res, next) => {
  return next({ status: 404, message: "NotFound" });
};
