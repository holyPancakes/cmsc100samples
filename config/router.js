var student  = require('./../controllers/student');
var degree  = require('./../controllers/degree');

module.exports = function(router){
	//routes for students
	router.route('/students')
			.get(student.findAll)
			.post.(student.insert)
			.put(student.update);

	router.route('students/:s_num')
			.get(student.findOne)
			.delete(student.remove);

	router.route('/degrees')
			.get(degree.findAll)
			.post(degree.insert)
			.put(degree.update);

	router.route('/degrees/:id')
			.get(degree.findOne)
			.delete(degree.remove);
			
	return router;
};