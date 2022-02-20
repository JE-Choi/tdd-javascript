class ProductService {
	constructor(productClient) {
		this.productClient = productClient;
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