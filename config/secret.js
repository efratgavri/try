require("dotenv").config();

exports.config={
   userDb:process.env.USER_DB, 
   userPass:process.env.PASS_DB,
   tokenSecret:process.env.TOKEN_SECRET,
   port:process.env.PORT
}