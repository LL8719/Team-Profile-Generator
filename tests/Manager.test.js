const Manager = require('../lib/Manager');

describe('Manager', () => {
	describe('getName', () => {
		it('should return the name of the manager', () => {
			const manager = new Manager('Jack', '7', 'Jack.Daniels@gmail.com', '480');
			expect(manager.getName()).toEqual('Jack');
		});
	});
});
