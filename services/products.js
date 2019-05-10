const productsMocks = require('../utils/mocks/products')

class ProductServic {
	construct() {

	}

	getProducts() {
		return Promise.resolve(productsMocks[0])
	}

	getProduct(productId) {
		return Promise.resolve(productsMocks[0])
	}

	createProduct() {
		return Promise.resolve(productsMocks[0])
	}

	updateProduct(productId) {
		return Promise.resolve(productsMocks[0])
	}

	deleteProduct(productId) {
		return Promise.resolve(productsMocks[0])
	}

}