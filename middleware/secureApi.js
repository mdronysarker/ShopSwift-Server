const secureApi = (req, res, next) => {
  console.log("hii ronyh");
  next();
};

module.exports = secureApi;
