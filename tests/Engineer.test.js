const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
	// Name test
	describe('getName', () => {
		it('should return the name of the engineer', () => {
			const engineer = new Engineer(
				'Jack',
				'7',
				'Jack.Daniels@gmail.com',
				'JackDaniels07'
			);
			expect(engineer.getName()).toEqual('Jack');
		});
	});
	// Id test
	describe('getId', () => {
		it('should return the id of the engineer', () => {
			const engineer = new Engineer('Jack', 7, 'JackDaniels@gmail.com');
			expect(engineer.getId()).toEqual(7);
		});
	});
	// Email test
	describe('getEmail', () => {
		it('should return the email of the engineer', () => {
			const engineer = new Engineer('Jack', 7, 'JackDaniels@gmail.com');
			expect(engineer.getEmail()).toEqual('JackDaniels@gmail.com');
		});
	});
	// gitHub test
	describe('getGithub', () => {
		it('should return the github of the engineer', () => {
			const engineer = new Engineer(
				'Jack',
				7,
				'JackDaniels@gmail.com',
				'JackDaniels07'
			);
			expect(engineer.getGithub()).toEqual('JackDaniels07');
		});
	});
});
