// Test for Intern

// refrence to what it's going to test for..
const Intern = require('../lib/Intern');

// refrence parent?
// const Employee = require('../lib/Employee');

// what am I going to test for?
describe('Intern object', () =>{

    // What should it do?
    it('Should create an object of school with the parameters of parent',()=>{

        // Arange 
        const name = 'Josh';
        const id = 1;
        const email = 'fakeemail@gmail.com';
        const school = 'UCB';
        // Act 
        const int = new Intern(name, id, email, school);
        // Assert
        expect(int.school).toEqual(school);
    });

    // What should it do?
    it('getRole() should override and as intern', ()=>{

         // Arange 
         const name = 'Josh';
         const id = 1;
         const email = 'fakeemail@gmail.com';
         const school = 'UCB';
         // Act 
         const int = new Intern(name, id, email, school);
         // Assert
         expect(int.getRole()).toEqual('Intern');


    });

});