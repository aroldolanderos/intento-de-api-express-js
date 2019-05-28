const mongo = require('./connect');
const {DB_NAME} = require('../config');

module.exports = {
    getProducts: function () {
        const db = mongo.instance().db(DB_NAME);
        const products = db.collection('products').find({}).toArray();
        return products;
    },

    getProductById: function (id) {
        const db = mongo.instance().db(DB_NAME);
        const product = db.collection('products').find({
            _id: id
        }).toArray();
        return product;
    }
}