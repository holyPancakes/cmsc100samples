var mysql = require('mysql');

module.exports = mysql.createConnection({
	host	: 'localhost',
	user	: 'cmsc100ef2l',
	password: 'cmsc100ef2l',
	database: 'cmsc100ef2l'
});