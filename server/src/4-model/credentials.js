import Joi from "joi";

export default class Credentials {

    constructor(credentials) {
        this.userEmail = credentials.userEmail;        
        this.userPassword = credentials.userPassword;
    }

    static #validationSchema = Joi.object({
        userEmail: Joi.string().required().min(4).max(50),
        userPassword: Joi.string().required().min(4).max(50)
    });

    validate() {
        const result = Credentials.#validationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.details.map(err => err.message) : null;
    }
}