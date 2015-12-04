var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'java_inserter',
  password : 'java_is_cool',
  database : 'eecs341_test'
});

connection.connect();

connection.query('SELECT * from Artist', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.' + err);
});

connection.end();
