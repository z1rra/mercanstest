import variables from './env_variables.json';

// in this file you can append custom step methods to 'I' object

export = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login: function(email, password) {

      this.amOnPage('/login');
      this.see('Email');
      this.fillField('email', email);
      this.fillField('password', password);
      this.click('Login');
      this.waitForURL(variables.apiBaseUrl+'/ess/quick-access?verified=true', 10);
    }
  });
}
