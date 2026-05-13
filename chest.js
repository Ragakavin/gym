const { workouts, sendJson } = require("./_data");

module.exports = (req, res) => {
  sendJson(res, 200, workouts.chest);
};
