// Test for Manager

// refrence to what it's going to test for..
const Manager = require('../lib/Manager');

// refrence parent?
// const Employee = require('../lib/Employee');

// what am I going to test for?
describe('Manager object', () =>{

    // What should it do?
    it('Should create an object of office number with the parameters of parent',()=>{

        // Arange 
        const name = 'Josh';
        const id = 1;
        const email = 'fakeemail@gmail.com';
        const officeNum = 222 ;
        // Act 
        const man = new Manager(name, id, email, officeNum);
        // Assert
        expect(man.officeNum).toEqual(officeNum);
    });

    // What should it do?
    it('getRole() should override and as Manager', ()=>{

         // Arange 
         const name = 'Josh';
         const id = 1;
         const email = 'fakeemail@gmail.com';
         const officeNum = 222 ;
         // Act 
         const man = new Manager(name, id, email, officeNum);
         // Assert
         expect(man.getRole()).toEqual('Manager');


    });

});