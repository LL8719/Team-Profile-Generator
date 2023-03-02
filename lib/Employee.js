class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	getName(name) {
		if (typeof name !== 'string' || name.trim().length === 0) {
			throw new Error('Invalid name.');
		} else {
			return this.name;
		}
	}
	getId(id) {
		if (typeof id !== 'string' || id.trim().length === 0) {
			throw new Error('Invalid id.');
		} else {
			return this.id;
		}
	}
	getEmail(email) {
		if (typeof email !== 'string' || email.trim().length === 0) {
			throw new Error('Invalid email.');
		} else {
			return this.email;
		}
	}
	getRole(employee) {
		if (typeof employee !== 'string' || employee.trim().length === 0) {
			throw new Error('Invalid role.');
		} else {
			return 'Employee';
		}
	}
}

module.exports = Employee;
