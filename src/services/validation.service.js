import PasswordValidator from 'password-validator';
import validator from 'validator';

const schema = new PasswordValidator();

schema
  .is().min(8) // Minimum length 8
  .is().max(30) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits() // Must have digits
  .has()
  .not()
  .spaces(); // Should not have spaces

const validateUserName = (userName) => {
  if (userName === undefined || validator.isEmpty(userName)) {
    return 'Username required';
  } if (userName.length > 15) {
    return 'Maximum length 15';
  } if (!/^(?![_.])/.test(userName)) {
    return 'Must not start with _ or .';
  } if (!/^[a-z0-9._]+$/.test(userName)) {
    return 'Must contain a-z _ or .';
  }
  return false;
};

const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber === undefined || validator.isEmpty(phoneNumber)) {
    return 'Phone number is required';
  } if (!validator.isMobilePhone(phoneNumber)) {
    return 'Phone number is not correct';
  }
  return false;
};

const validatePassword = (password) => {
  if (password === undefined || validator.isEmpty(password)) {
    return 'Password is required';
  }
  const message = schema.validate(password, { list: true }).map((current) => {
    if (current === 'min') {
      return 'Minimum length 8';
    } if (current === 'max') {
      return 'Maximum length 30';
    } if (current === 'uppercase') {
      return 'Must have uppercase letters';
    } if (current === 'lowercase') {
      return 'Must have lowercase letters';
    } if (current === 'digits') {
      return 'Must have digits';
    } if (current === 'spaces') {
      return 'Should not have spaces';
    }
    return false;
  });
  return message.length ? message[0] : null;
};

const validateEmail = (email) => {
  if (email === undefined || validator.isEmpty(email)) {
    return 'Email is required';
  } if (!validator.isEmail(email)) {
    return 'Email is not correct.';
  }
  return false;
};

const validateRepeatPassword = (pass, repeatPass) => (pass !== repeatPass ? 'Repeat password is not correct' : false);

export {
  validateEmail,
  validatePassword,
  validateUserName,
  validatePhoneNumber,
  validateRepeatPassword,
};
