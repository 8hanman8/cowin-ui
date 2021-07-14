/*eslint-disable*/
var Database = function () {
  return {
    generateMobileOTP: require("./data/generate-otp.json"),
    validateMobileOtp: require("./data/validate-mobile-otp.json"),
    beneficiaries: require("./data/beneficiaries.json"),
    idTypes: require("./data/id-types.json"),
  };
};
// returns a json representation of our Database.
module.exports = new Database();
