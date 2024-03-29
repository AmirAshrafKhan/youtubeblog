const { validateToken } = require("../services/authentication.js");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      next();
    }
    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
      next();
    } catch (error) {}
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
