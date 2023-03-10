const Employee = require('./Employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);

		this.officeNumber = officeNumber;
	}
	getOfficeNum() {
		return this.officeNumber;
	}
	getRole(Employee) {
		return 'Manager';
	}
}

module.exports = Manager;
