
const ProductClient = require('./product_client');

/**
 * 안 좋은 예씨
 */
class ProductService {
	constructor() {
		this.productClient = new ProductClient();
	}

	/**
     * 구매가능한 아이템만 반환
     * @returns {Promise<void>}
     */
	fetchAvailablesItems() {
		return this.productClient
			.fetchItems()
			.then((item) => item.filter((item) => item.available));
	}
}

module.exports = ProductService;