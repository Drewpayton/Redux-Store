const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    ]
});

const Order = model('order', orderSchema);

module.exports = Order;