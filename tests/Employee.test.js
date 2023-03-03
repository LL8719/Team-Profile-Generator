// const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe('Employee', () => {
	// Name test
	describe('getName', () => {
		it('should return the name of the employee', () => {
			const employee = new Employee('Jack', 7, 'JackDaniels@gmail.com');
			expect(employee.getName()).toEqual('Jack');
		});
	});
	// Id test
	describe('getId', () => {
		it('should return the id of the employee', () => {
			const employee = new Employee('Jack', 7, 'JackDaniels@gmail.com');
			expect(employee.getId()).toEqual(7);
		});
	});
	// Email test
	describe('getEmail', () => {
		it('should return the email of the employee', () => {
			const employee = new Employee('Jack', 7, 'JackDaniels@gmail.com');
			expect(employee.getEmail()).toEqual('JackDaniels@gmail.com');
		});
	});
	// Role test
	describe('getRole', () => {
		it('should return the role of the employee', () => {
			const employee = new Employee('Jack', 7, 'JackDaniels@gmail.com');
			expect(employee.getRole()).toEqual('Employee');
		});
	});
});
