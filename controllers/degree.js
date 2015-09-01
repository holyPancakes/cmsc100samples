var db = require(__dirname + './../lib/mysql');


exports.findOne  = function(req, res){
	db.query("SELECT * FROM degree WHERE degree_id='" + req.params.id + "'", 
		function(err, rows){
			if(err)
				return next(err);
			if(rows.length === 0){
				res.send(404, {message: 'Degree program not found'});
			}else{
				res.send(rows[0]);
			}
		});
};

exports.findAll  = function(req, res){
	db.query("SELECT * FROM degree", 
		function(err, rows){
			if(err)
				return next(err);
			res.send(rows);
		});
};


exports.insert = function(req, res){
	db.query("INSERT INTO degree(degree_code, description, total_units) VALUES(?, ?, ?)", [req.body.degree_code, req.body.description, req.body.total_units],
		function(err, rows){
			if(err) 
				return next(err)
			res.send(rows);
		});

}

exports.remove = function(req, res, next){
	db.query("DELETE FROM degree WHERE degree_id=?",[req.params.id],  
		function(err, rows){
			if(err)
				return next(err);
			res.send(rows);
		});
};

exports.update = function(req, res, next){
	db.query("UPDATE degree SET description=?, total_units=? WHERE degree_id=?",[req.body.description, req.body.total_units, req.body.id],
		function(err, rows){
			if(err)
				return next(err);
			res.send(rows);
		});
};