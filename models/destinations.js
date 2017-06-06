let mongoose = require('mongoose');

let destinationSchema = mongoose.Schema({
    name: { type: String },
    type: { type: String },
    province: { type: String },
    loc: { 'type': { type: String, enum: "Point", default: "Point" }, coordinates: { type: [Number], default: [0, 0] } },
    image: { type: String },
    desc: { type: String },
});

module.exports = mongoose.model('DestinationSchema', destinationSchema);