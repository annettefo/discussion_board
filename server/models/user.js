var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
	name: {type: String},
	topic:[{ type: mongoose.Schema.Types.ObjectId, ref: "Topic" }],
	answer:[{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
	comments:[{ type: mongoose.Schema.Types.ObjectId, ref: "Comments"}]
}, {timestamps: true});
console.log("Going through model user");
mongoose.model('User', UserSchema);
