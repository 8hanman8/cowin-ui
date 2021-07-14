/*eslint-disable*/
var Database = function () {
  return {
    generateMobileOTP: require("./data/generate-otp.json"),
  };
};
// returns a json representation of our Database.
module.exports = new Database();
