var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'java_inserter',
  password : 'java_is_cool',
  database : 'eecs341_test'
});

connection.connect();

connection.query('SELECT title, COUNT(*) AS number_of_tracks FROM Album a JOIN is_in_album o ON o.album_id = a.alb_id GROUP BY album_id HAVING COUNT(*) > 1;', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: \n', rows);
  else
    console.log('Error while performing Query.' + err);
});

connection.end();
