const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flavorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Shop'
    },
    roaster: String,
    countryOrigin: String,
    favorite: {
        type: Boolean,
        default: false
    },
    decaf: {
        type: Boolean,
        default: false
    },
    notes: String
}, {timestamps: true})

module.exports = mongoose.model('Flavor', flavorSchema);