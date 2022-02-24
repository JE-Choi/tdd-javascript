const fetchProduct = require('./async');
describe('Async', () => {
	/**
     * done방식은 테스트 완료되는 시간 6ms => 조금 딜레이가 있음.
     */
	it('asyn-done', (done) => {
		fetchProduct().then((item) => {
			expect(item).toEqual({item: 'Milk', price: 2000});
			done();
		});
	});
	/**
     * return 방식은 테스트 완료되는 시간 0ms
     */
	it('async - return', () => {
		return fetchProduct().then((item) => {
			expect(item).toEqual({item: 'Milk', price: 2000});
		});
	});

	it('async - await', async () => {
		const item = await fetchProduct();
		expect(item).toEqual({item: 'Milk', price: 2000});
	});

	it('async - resolves', async () => {
		return expect(fetchProduct()).resolves.toEqual({item: 'Milk', price: 2000});
	});

	it('async - reject', async () => {
		return expect(fetchProduct('error')).rejects.toEqual('network error');

	});
});
