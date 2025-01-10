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
    //dates need to be changed to available range each time manually for now
    //TODO this should be a function if it needs to be reused
    I.click('//button[@aria-label="Request new leave"]');
    I.click('//div[@class="day-cell" and text()="16"]');
    I.click('//div[@class="day-cell" and text()="17"]');
    I.click('//button[@data-test="submit-approve"]');
    //confirm request in the modal
    I.click('Confirm');
    //assert that there is now a request. assumption is that there are no previous requests
    I.see('My Requests (1)');
    
  });
