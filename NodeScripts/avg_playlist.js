var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'java_inserter',
  password : 'java_is_cool',
  database : 'eecs341_test'
});

connection.connect();

connection.query('SELECT AVG(rating) AS rating FROM is_on_playlist s, Playlist p WHERE s.playlist_id = p.playlist_id AND p.name = \'Sad Songs\';', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: \n', rows);
  else
    console.log('Error while performing Query.' + err);
});

connection.end();
