import variables from './env_variables.json';

include: {
  
  I: './steps_file.ts'
}

Feature('Employee adds paid Leave request');


BeforeSuite(({ I }) => { // or Background
  I.login(variables.employeeU, variables.employeePw)
  I.amOnPage('/ess/quick-access');
});

Scenario('Employee request paid leave', ({ I }) => {

    I.see('Leaves');
    //navigate to leaves
    I.click('Leaves');
    //fill out the leave request, only date fields are changed at the moment
    I.click('//button[@aria-label="Request new leave"]');
    I.click('//div[@class="day-cell" and text()="14"]');
    I.click('//div[@class="day-cell" and text()="15"]');
    I.click('//button[@data-test="submit-approve"]');
    //confirm request in the modal
    I.click('Confirm');
    //assert that there is now a request. assumption is that there are no previous requests
    I.see('My Requests (1)');
    
  });