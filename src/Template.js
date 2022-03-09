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
}
