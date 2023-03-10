const Employee = require('./Employee');

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);

		this.school = school;
	}
	getSchool(school) {
		return this.school;
	}
	getRole(Employee) {
		return 'Intern';
	}
}

module.exports = Intern;
