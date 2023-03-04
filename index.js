const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/createHTML');

const teamAssemble = [];

const startManager = () => {
	return inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: "What is the Manager's name?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter a valid Manager's name!");
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'id',
				message: "What is the Manager's id?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter a valid Manager's id!");
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'email',
				message: "What is the Manager's email?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter a valid Manager's email!");
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'officeNumber',
				message: "What is the Manager's office number?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter a valid Manager's office number!");
						return false;
					}
				},
			},
		])
		.then((data) => {
			const { name, id, email, officeNumber } = data;
			const manager = new Manager(name, id, email, officeNumber);
			teamAssemble.push(manager);
			selectOptions();
		});
};

const selectOptions = () => {
	return inquirer
		.prompt([
			{
				type: 'list',
				name: 'options',
				message: 'What type of employee would you like to add?',
				choices: ['Engineer', 'Intern', 'Done'],
			},
		])
		.then((choice) => {
			switch (choice.options) {
				case 'Intern':
					startIntern();
					break;
				case 'Engineer':
					startEngineer();
					break;
				case 'Done':
					startTeam();
					break;
			}
		});
};

const startIntern = () => {
	return inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: "What is the Intern's name?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter a valid Intern's name!");
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'id',
				message: "What is the Intern's id?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter a valid Intern's id!");
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'email',
				message: "What is the Intern's email?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter a valid Intern's email!");
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'School',
				message: "What is the Intern's school?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log('Please enter a valid school!');
						return false;
					}
				},
			},
		])
		.then((data) => {
			const { name, id, email, school } = data;
			const intern = new Intern(name, id, email, school);
			teamAssemble.push(intern);
			selectOptions();
		});
};

const startEngineer = () => {
	return inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: "What is the Engineer's name?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter a valid Engineer's name!");
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'id',
				message: "What is the Engineer's id?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter a valid Engineer's id!");
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'email',
				message: "What is the Engineer's email?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter a valid Engineer's email!");
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'github',
				message: "What is the Engineer's github username ?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log('Please enter a valid username!');
						return false;
					}
				},
			},
		])
		.then((data) => {
			const { name, id, email, github } = data;
			const engineer = new Engineer(name, id, email, github);
			teamAssemble.push(engineer);
			selectOptions();
		});
};

const startTeam = () => {
	const content = generateHTML(teamAssemble);
	fs.writeFile('./dist/index.html', content, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Team profile has been successfully created!');
		}
	});
};

startManager();
