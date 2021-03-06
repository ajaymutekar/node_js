var mysql = require("mysql");
// const PORT = require('./index').PORT;
const PORT = 5100;
var enviroment_development = {
  Dbconnection: mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'employee',
    acquireTimeout: 1000000
  }),
  port: PORT
};

enviroment_development.Dbconnection.getConnection(function(err, connection) {
    if (!err){
      console.log("Connected!");
    }else{
      console.log(err);
    //   enviroment_development.Dbconnection.release();
    }
  });

module.exports = enviroment_development;
