const managerCard = function (manager) {
  return `
      <div class="col-4 mt-4">
        <div class="card h-100 shadow p-3 m-3 mb-5 bg-body rounded" style="width: 18rem;">
          <div class="card-body">
            <span class="material-icons d-inline">work_outline</span>
            <p class="card-title d-inline lead">${manager.name}</p>
            <p class="card-subtitle text-muted">Manager</p>
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Office: ${manager.officeNum}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></p>
          </div>
        </div>
      </div>`
};

const engineerCard = function (engineer) {
  return `
      <div class="col-4 mt-4">
        <div class="card h-100 shadow p-3 m-3 mb-5 bg-body rounded" style="width: 18rem;">
          <div class="card-body">
            <span class="material-icons d-inline">engineering</span>
            <p class="card-title d-inline lead">${engineer.name}</p>
            <p class="card-subtitle text-muted">Engineer</p>
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">GitHub Account: <a href="${engineer.githubName}" class="card-link">${engineer.githubName}</a></p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></p>
          </div>
        </div>
      </div>`
};

const internCard = function (intern) {
  return `
      <div class="col-4 mt-4">
        <div class="card h-100 shadow p-3 m-3 mb-5 bg-body rounded" style="width: 18rem;">
          <div class="card-body">
            <span class="material-icons d-inline">laptop</span>
            <p class="card-title d-inline lead">${intern.name}</p>
            <p class="card-subtitle text-muted">Intern</p>
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">School: ${intern.schoolName}</p>
            <p class="card-text">Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a></p>
          </div>
        </div>
      </div>`
};

newHTML = (data) => {
  pageArr = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const newManager = managerCard(employee);

      pageArr.push(newManager);
    }

    if (role === 'Engineer') {
      const newEngineer = engineerCard(employee);

      pageArr.push(newEngineer);
    }

    if (role === 'Intern') {
      const newIntern = internCard(employee);

      pageArr.push(newIntern);
    }
  }

const teamCards = pageArr.join('');

const generateTeam = generateHTML(teamCards);
return generateTeam;
};

const generateHTML = function (teamCards) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <title>The Team</title>
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  
  <body>
    <header>
      <h1 class="text-center bg-dark bg-gradient text-white p-3 mb-2">My Teammates</h1>
    </header>
  
    <div class="container">
      <div class="row justify-content-center card-group" id="team-cards">

      ${teamCards}

      </div>
    </div>
  </body>
  
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  
  </html>`
};

module.exports = newHTML;