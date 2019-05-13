const accountsMocks = require('../utils/mocks/accounts');
const MongoLib = require('../lib/mongo');

class AccountService {
	constructor () {
		this.collection = 'accounts';
		this.mongoDB = new MongoLib();
	}

	async getAccounts({ tags }) {
		const query = tags && { tags: { $in: tags }};
		const accounts = await this.mongoDB.getAll(this.collection, query);
		return accounts || [];
	}

	async getAccount({ accountId }) {
		const account = await this.mongoDB.get(this.collection, accountId);
		return account || {};
	}

	async createAccount({ account }) {
		const createdaccountId = await this.mongoDB.create(this.collection, account);
		return createdaccountId;
	}

	async updateAccount({ accountId, account }) {
		const updatedAccountId = await this.mongoDB.update(
			this.collection,
			accountId,
			account
		);
		return updatedAccountId;
	}
	
	async deleteAccount({ accountId }) {
		const deletedAccountId = await this.mongoDB.delete(
			this.collection,
			accountId
		);
		return deletedAccountId;
	}
}

module.exports = AccountService;