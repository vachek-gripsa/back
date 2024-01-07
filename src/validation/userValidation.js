import { check } from 'express-validator';

export const userValidation = [
  check('firstName')
    .trim()
    .isLength({ min: 2, max: 45 })
    .withMessage('Name must be between 2 and 45 characters')
    .matches(/^[A-Z][a-zA-Z -]*$/)
    .withMessage('Start with a capital Latin letter and use only letters, spaces, and hyphens'),
  check('lastName')
    .trim()
    .isLength({ min: 2, max: 45 })
    .withMessage('Last name must be between 2 and 45 characters')
    .matches(/^[A-Z][a-zA-Z -]*$/)
    .withMessage('Start with a capital Latin letter and use only letters, spaces, and hyphens'),
  check('password')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must contain at least 8 characters')
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/)
    .withMessage('The password must contain an uppercase letter, a number and a special character')
    .custom(value => !/\s/.test(value))
    .withMessage('The password must not contain spaces in the middle'),
  check('email').isEmail().withMessage('Please enter a valid email').trim().normalizeEmail(),
  check('userName')
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .isString()
    .withMessage('Please enter a valid user name number'),
  check('phoneNumber')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 9 })
    .withMessage('Please enter a valid phone number')
    .matches(/^$|^\d+$/)
    .withMessage('Phone number can only contain digits'),
  check('telegram')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .isLength({ min: 5, max: 32 })
    .withMessage('Please enter a valid TG username')
    .matches(/^@[a-zA-Z0-9_.]+$/)
    .withMessage('Please start with @ and use letters, numbers, underscores, periods'),
  check('githubProfile')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .custom(value => /^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/.test(value))
    .withMessage('Please enter a valid GitHub profile link'),
  check('linkedInProfile')
    .optional({ nullable: true, checkFalsy: true })
    .isString()
    .custom(value => /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+$/.test(value))
    .withMessage('Please enter a valid LinkedIn profile link')
];
