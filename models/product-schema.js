const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nameProduct: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    category: {
        type: String,
    },
    sellerID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    releaseDate: {
        type: Date,
    },
    latitude: {
        type: Number,
        required: true, // Depending on your requirements
    },
    longitude: {
        type: Number,
        required: true, // Depending on your requirements
    },
    offers: [{
        buyerID: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        price: {
            type: Number,
        },
        status: {
            type: String,
            enum: ['pending', 'accepted', 'rejected'],
            default: 'pending'
        }
    }]
});

module.exports = mongoose.model('Product', ProductSchema);