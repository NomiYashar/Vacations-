import Joi from 'joi';

export default class User {

    constructor(user) {
        this.firstName = user.firstName;        
        this.lastName = user.lastName;
        this.userEmail = user.userEmail;        
        this.userPassword = user.userPassword;
        this.userRole = 0;
    }

    static #validationSchema = Joi.object({
        firstName: Joi.string().min(4).max(12),
        lastName: Joi.string().min(4).max(12),
        userEmail: Joi.string().min(4).max(30),
        userPassword: Joi.string().min(4).max(28),
        userRole: Joi.number().min(0)
    });

    validate() {
        const result = User.#validationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.details.map(err => err.message) : null;
    }
}
