// Create Manager HTML
const createManager = function (manager) {
	return `
   <div class="card  shadow m-3" style="width: 15rem;">
   <div class="card-header text-white bg-primary mb-2">
        <h2>${manager.name}</h2>
   </div>
   <div class="card-body ">
      <ul class="list-group list-group-flush border border-secondary rounded-1 ">
        <li class="list-group-item card-id">${manager.id}</li>
        <li class="list-group-item card-email">${manager.email}</li>
        <li class="list-group-item card-number">${manager.officeNumber}</li>
      </ul>
   </div>
  </div>
   `;
};
// Create Engineer HTML
const createEngineer = function (engineer) {
	return `
   <div class="card  shadow m-3" style="width: 15rem;">
   <div class="card-header text-white bg-primary mb-2">
        <h2>${engineer.name}</h2>
   </div>
   <div class="card-body ">
      <ul class="list-group list-group-flush border border-secondary rounded-1 ">
        <li class="list-group-item card-id">${engineer.id}</li>
        <li class="list-group-item card-email">${engineer.email}</li>
        <li class="list-group-item card-number">${engineer.github}</li>
      </ul>
   </div>
  </div>
   `;
};
// Create Intern HTML
const createInter = function (intern) {
	return `
   <div class="card  shadow m-3" style="width: 15rem;">
   <div class="card-header text-white bg-primary mb-2">
        <h2>${intern.name}</h2>
   </div>
   <div class="card-body ">
      <ul class="list-group list-group-flush border border-secondary rounded-1 ">
        <li class="list-group-item card-id">${intern.id}</li>
        <li class="list-group-item card-email">${intern.email}</li>
        <li class="list-group-item card-number">${intern.school}</li>
      </ul>
   </div>
  </div>
   `;
};

generateHTML = (data) => {
	if (!data || !Array.isArray(data)) {
		return '';
	}

	teamAssemble = [];

	for (let i = 0; i < data.length; i++) {
		const employee = data[i];

		const role = employee.getRole();
		// manger
		if (role === 'Manager') {
			const managerInfo = createManager(employee);
			teamAssemble.push(managerInfo);
		}
		// engineer
		if (role === 'Engineer') {
			const engineerInfo = createEngineer(employee);
			teamAssemble.push(engineerInfo);
		}
		// intern
		if (role === 'intern') {
			const internInfo = createInter(employee);
			teamAssemble.push(internInfo);
		}
	}

	const employeeRoles = teamAssemble.join('');
	const createTeam = createTeamPage(employeeRoles);

	return createTeam;
};

const createTeamPage = function (employeeRoles) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1 class="text-center mb5 p-4 text-white bg-danger">My Team</h1>
    </header>
    <main>
<!-- Container for Team cards -->
    <div class="container mt-5 ">
        <div class="row justify-content-center mx-auto col-12 col-md-9 col-xl-9 ">
          
          ${employeeRoles}

      </div>
    </div>
</main>
    <script src="/script.js"></script>
</body>
</html>`;
};

module.exports = generateHTML;
