const { sendJson } = require("./_data");

module.exports = (req, res) => {
  sendJson(res, 200, { message: "UPLIFT API is running!" });
};
