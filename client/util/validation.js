module.exports = {
  validName: (name) => {
    let valid = name.trim().length > 0;
    if (!valid) {
      return 'You name should not be blank or all spaces';
    } else return '';
  },

  validEmail: (email) => {
    var valid;
    if (email.length > 0) {
      const reg = /\S+@\S+\.\S+/;
      valid = reg.test(email);
    }
    if (!valid) {
      return 'Please enter a valid email address';
    } else return '';
  },

  validBod: (bod) => {
    var valid = true;
    var reg = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

    valid = reg.test(bod);
    if (bod !== '' && !valid) {
      return 'Please enter a valid date in format of MM/DD/YYYY between 1900 and 2099';
    } else return '';
  },
};
