const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    city: String
}, {timestamps: true})

module.exports = mongoose.model('Shop', shopSchema);