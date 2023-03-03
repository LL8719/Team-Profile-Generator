const Manager = require('../lib/Manager');

describe('Manager', () => {
	// Name test
	describe('getName', () => {
		it('should return the name of the manager', () => {
			const manager = new Manager('Jack', '7', 'Jack.Daniels@gmail.com', '480');
			expect(manager.getName()).toEqual('Jack');
		});
	});
	// Id test
	describe('getId', () => {
		it('should return the id of the manager', () => {
			const manager = new Manager('Jack', 7, 'JackDaniels@gmail.com');
			expect(manager.getId()).toEqual(7);
		});
	});
	// Email test
	describe('getEmail', () => {
		it('should return the email of the manager', () => {
			const manager = new Manager('Jack', 7, 'JackDaniels@gmail.com');
			expect(manager.getEmail()).toEqual('JackDaniels@gmail.com');
		});
	});
	// Office number test
	describe('getOfficeNum', () => {
		it('should return the office number of the manager', () => {
			const manager = new Manager('Jack', 7, 'JackDaniels@gmail.com', '480');
			expect(manager.getOfficeNum()).toEqual('480');
		});
	});
	// Role test
	describe('getRole', () => {
		it('should return the role of the manager', () => {
			const manager = new Manager('Jack', 7, 'JackDaniels@gmail.com');
			expect(manager.getRole()).toEqual('Manager');
		});
	});
});
