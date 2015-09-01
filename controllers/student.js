//controllers/student.js

var db = require(__dirname + './../lib/mysql');

exports.findAll = function(req, res){
	db.query("SELECT * FROM student", function(err, rows){
		if(err)
			return next(err);
		res.send(rows);
	});
};

exports.findOne  = function(req, res){
	db.query("SELECT * FROM student WHERE studentno='" + req.params.s_num + "'", 
		function(err, rows){
			if(err)
				return next(err);
			if(rows.length === 0){
				res.send(404, {message: 'Student program not found'});
			}else{
				res.send(rows[0]);
			}
		});
};

exports.insert = function(req, res){
	db.query("INSERT INTO student(studentno, NAME, birthday) VALUES(?, ?, ?)", [req.body.s_num, req.body.name, req.body.birthday],
		function(err, rows){
			if(err) 
				return next(err)
			res.send(rows);
		});
};

exports.update = function(req, res, next){
	db.query("UPDATE student SET NAME=?, birthday=? WHERE studentno=?",[req.body.name, req.body.birthday, req.body.s_num],
		function(err, rows){
			if(err)
				return next(err);
			res.send(rows);
		});
};

exports.remove = function(req, res, next){
	db.query("DELETE FROM degree WHERE studentno=?",[req.params.s_num],  
		function(err, rows){
			if(err)
				return next(err);
			res.send(rows);
		});
};