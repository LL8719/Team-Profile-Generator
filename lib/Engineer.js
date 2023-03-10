const Employee = require('./Employee');

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);

		this.github = github;
	}
	getGithub(github) {
		return this.github;
	}
	getRole(Employee) {
		return 'Engineer';
	}
}

module.exports = Engineer;
