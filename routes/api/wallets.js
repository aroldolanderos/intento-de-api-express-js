const MongoLib = require('../lib/mongo');

class WalletsService {
	constructor () {
		this.collection = 'wallets';
		this.mongoDB = new MongoLib();
	}

	async getAccount({ accountId }) {
		const account = await this.mongoDB.get(this.collection, accountId);
		return account || {};
	}

	async createAccount({ account }) {
		const createdAccountId = await this.mongoDB.create(this.collection, account);
		return createdAccountId;
	}

	async updateAccount({ accountId, account }) {
		const updatedAccountId = await this.mongoDB.update(
			this.collection,
			accountId,
			account
		);
		return updatedProductId;
	}

	async deleteAccount({ accountId }) {
		const deletedAccountId = await this.mongoDB.delete(
			this.collection,
			accountId
		);
		return deletedProductId;
	}
}

module.exports = WalletsService;