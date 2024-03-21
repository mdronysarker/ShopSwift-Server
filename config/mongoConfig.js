const mongoose = require("mongoose");

const mongoConfig = () => {
  mongoose
    .connect(
      "mongodb+srv://shopswift:rxDcyPm9xlc38JUr@cluster0.rsfnkpj.mongodb.net/shopswift?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Database Connected!"))
    .catch((error) => {
      console.error("Error connecting to database:", error);
      // Handle error, such as retrying connection or logging the error
    });
};

module.exports = mongoConfig;
