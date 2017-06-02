var mongoose = require('mongoose');
Schema = mongoose.Schema;

var ProjectSchema = mongoose.Schema({
    title: String,
    description: String,
    github: String,
    startDate: Date,
    deliverableDate: Date,
    compensation: Number,
    technologies: [String],
    keywords: [String],
    relatedClasses: [String],
    creator: { type: Schema.Types.ObjectId, ref: 'User'},
    admins: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    collaborators: [{ type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Project', ProjectSchema);
