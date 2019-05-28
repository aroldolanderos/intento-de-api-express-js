const productsMocks = require('../utils/mocks/products');
const MongoLib = require('../lib/mongo');
const dbTeast = require('../db');

class ProductsService {
	constructor () {
		this.collection = 'products';
		this.mongoDB = new MongoLib();
	}

	async getProducts({ tags }) {
		const product = await this.mongoDB.get(this.collection, productId);
		return products || {};
		return dbTeast.getProducts() || [];
	}

	async getProduct({ productId }) {
		const product = await this.mongoDB.get(this.collection, productId);
		return product || {};
	}

	async createProduct({ product }) {
		const createdProductId = await this.mongoDB.create(this.collection, product);
		return createdProductId;
	}

	async updateProduct({ productId, product }) {
		const updatedProductId = await this.mongoDB.update(
			this.collection,
			productId,
			product
		);
		return updatedProductId;
	}

	async deleteProduct({ productId }) {
		const deletedProductId = await this.mongoDB.delete(
			this.collection,
			productId
		);
		return deletedProductId;
	}
}

module.exports = ProductsService;