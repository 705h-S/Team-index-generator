function generateHTML(employeeData) {
  // Create an array to determine which cards need to be made
  employeeCardsArray = [];

  // Create a for loop to capture all the ojbects in the array and get the employee object and role
  for (let i = 0; i < employeeData.length; i++) {
    const employee = employeeData[i];
    const role = employee.getRole();

    // if role equals "Manager", create a manager card
    if (role === "Manager") {
      const managerCard = generateManagerCard(employee);

      // push managerCard to employeeCardsArray to eventually generate team cards
      employeeCardsArray.push(managerCard);
    }

    // if role equals "Engineer", create an engineer card
    if (role === "Engineer") {
      const engineerCard = generateEngineerCard(employee);

      //  push engineerCard to employeeCardsArray to eventually generate team cards
      employeeCardsArray.push(engineerCard);
    }

    // if role equals "Intern", create an intern card
    if (role === "Intern") {
      const internCard = generateInternCard(employee);

      //  push internCard to employeeCardsArray to eventually generate team cards
      employeeCardsArray.push(internCard);
    }
  }

  // .join('') returns the employeeCardsArray as a string which is needed for creating the html page
  const employeeCards = employeeCardsArray.join("");

  // return generateTeam to create html
  const generateTeam = generateTeamCards(employeeCards);
  return generateTeam;
};
// Manager
function generateManagerCard (manager) {
    return `
      <div class="card mx-4 mb-4" id="manager-card">
      <div class=" team card-header text-center card-title  text-white">
          <h3>${manager.name}</h3>
          <h4><i class="fas fa-mug-hot mr-2"></i>Manager</h4>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: <a href="tel:${manager.officeNumber}">${manager.officeNumber}</a></li>
          </ul>
        </div>
      </div>
    `;
  };
  // Intern
  function generateInternCard (intern) {
    return `
      <div class="card mx-4 mb-4" id="intern-card">
      <div class="card-header text-center card-title team text-white">
            <h3>${intern.name}</h3>
            <h4><i class="fas fa-user-graduate mr-2"></i>Intern</h4>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
          </ul>
        </div>
      </div>
    `;
  }