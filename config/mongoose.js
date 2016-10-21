var mongoose = require('mongoose');

var fs = require('fs');

mongoose.connect('mongodb://localhost/discussion_board_prep_blackprep');

var models_path = __dirname + '/../server/models'

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
})

console.log("Going through MONGODB");
