var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'java_inserter',
  password : 'java_is_cool',
  database : 'eecs341_test'
});

connection.connect();

connection.query('SELECT m.name FROM Musician m JOIN member_of o ON o.musician_id = m.musician_id WHERE artist_id = (SELECT artist_id FROM Artist WHERE name = \'Le Butcherettes\');', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: \n ', rows);
  else
    console.log('Error while performing Query.' + err);
});

connection.end();
