const ProductClient = require('../product_client');
const ProductService = require('../product_service_no_di');
jest.mock('../product_client');

/**
 * 워스트 테스트
 * - 네트워크환경에 의존되는 테스트
 */
describe('ProductService', () => {
	const fetchItems = jest.fn(async () => [
		{item: '🥛', available: true},
		{item: '🍌', available: false},
	]);
	ProductClient.mockImplementation(() => {
		return {
			fetchItems,
		};
	});
	let productService;

	beforeEach(() => {
		productService = new ProductService();
		fetchItems.mockClear();
		ProductClient.mockClear();
	});

	it('should filter out only available items', async () => {
		const items = await productService.fetchAvailablesItems();
		expect(items).toEqual([{item: '🥛', available: true}]);
		expect(items.length).toBe(1);
	});
});