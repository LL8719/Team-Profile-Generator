const Intern = require('../lib/Intern');

describe('Intern', () => {
	// Name test
	describe('getName', () => {
		it('should return the name of the intern', () => {
			const intern = new Intern('Jack', '7', 'Jack.Daniels@gmail.com', 'Pima');
			expect(intern.getName()).toEqual('Jack');
		});
	});
	// Id test
	describe('getId', () => {
		it('should return the id of the intern', () => {
			const intern = new Intern('Jack', 7, 'JackDaniels@gmail.com');
			expect(intern.getId()).toEqual(7);
		});
	});
	// Email test
	describe('getEmail', () => {
		it('should return the email of the intern', () => {
			const intern = new Intern('Jack', 7, 'JackDaniels@gmail.com');
			expect(intern.getEmail()).toEqual('JackDaniels@gmail.com');
		});
	});
	// School test
	describe('getSchool', () => {
		it('should return the school of the intern', () => {
			const intern = new Intern('Jack', 7, 'JackDaniels@gmail.com', 'Pima');
			expect(intern.getSchool()).toEqual('Pima');
		});
	});
});
