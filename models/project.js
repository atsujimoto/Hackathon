var mongoose = require('mongoose');

var ProjectSchema = mongoose.Schema({
    title: String,
    description: String,
    github: String,
    deliverableDate: Date,
    technologies: [String],
    relatedClasses: [String],
    creator: { type: Schema.Types.ObjectId, ref: 'User'},
    admins: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    collaborators: [{ type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Project', ProjectSchema);
