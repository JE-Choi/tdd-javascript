const Calculator = require('../calculator');

describe('', () => {
	let calculator;
	beforeEach(() => {
		calculator = new Calculator();
	});
	it('inits with 0', () => {
		expect(calculator.value).toBe(0);
	});

	it('sets', () => {
		calculator.set(9);
		expect(calculator.value).toBe(9);
	});

	it('clear', () => {
		calculator.clear();
		expect(calculator.value).toBe(0);
	});
	describe('',()=>{

		it('add', () => {
			calculator.add(2);
			expect(calculator.value).toBe(2);
		});

		it('add > 100이면 에러 발생해야 함.', () => {
			expect(()=>{
				calculator.add(101);
			}).toThrow('Value can not be greater than 100');
		});
	});


	it('subtract', () => {
		calculator.subtract(2);
		expect(calculator.value).toBe(-2);
	});

	it('multiply', () => {
		calculator.set(2);
		calculator.multiply(3);
		expect(calculator.value).toBe(6);
	});

	describe('divide', () => {
		it('0 / 0 === NaN', () => {
			calculator.divide(0);
			expect(calculator.value).toBe(NaN);
		});

		it('1 / 0 === Infinity', () => {
			calculator.set(1);
			calculator.divide(0);
			expect(calculator.value).toBe(Infinity);
		});
	});
});