const Intern = require('../lib/Intern');

describe('Intern', () => {
	describe('getName', () => {
		it('should return the name of the intern', () => {
			const intern = new Intern('Jack', '7', 'Jack.Daniels@gmail.com', 'Pima');
			expect(intern.getName()).toEqual('Jack');
		});
	});
});
