const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
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
});
