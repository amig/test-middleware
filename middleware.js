/**
 * Expose `mw()` function on requests.
 *
 * @return {Function}
 * @api public
 */
module.exports = function mw(options) {
  options = options || {};

  return function (req, res, next) {
    if (req.mw || options.keep) {
      return next();
    }
    req.mw = {
      foo: "bar"
    };
    next();
  }
}