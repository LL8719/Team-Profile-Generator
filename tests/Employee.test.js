const Employee = require('../lib/Employee');

describe('Employee', () => {
	describe('getName', () => {
		it('should return the name of the employee', () => {
			const employee = new Employee('Jack', 7, 'JackDaniels@gmail.com');
			expect(employee.getName()).toEqual('Jack');
		});
	});
});
