import jwt from "jsonwebtoken";
import dal from "../2-utils/dal.js";
import crypto from "crypto";
import { ValidationErrorModel } from "../4-model/error-models.js";

//login:

async function loginAsync(credentials) {
    
    // Validate credentials: 
    const error = credentials.validate();
    if (error) throw new ValidationErrorModel(error.message);
    
    // Encode password:
    credentials.userPassword = hash(credentials.userPassword);

    // Get user with username and encoded password:
    const user = await dal.executeQueryAsync(
        `
            select * from users 
            where userEmail='${credentials.userEmail}'
            and userPassword='${credentials.userPassword}'
        `
    ); 
    
    // refers to email and hashed password
    if (!user || user.length < 1) throw new ValidationErrorModel("Incorrect email or password.");

    // Do not send password back to the client!!
    delete user[0].password;

    // Get JWT token and assign it to the user:
    const token = jwt.sign({ user: user[0] }, "zot hahizdamnut lenasot et jey dablyou tea", { expiresIn: "7h" });

    //return user[0];
    return token;

}

//Register:
async function registerAsync(user) {

    // Validate credentials:  
    const error = user.validate();
    if (error) throw new ValidationErrorModel(error)
    
    const isExists = await isEmailExists(user.userEmail);
    if (isExists === 1) {
        throw new ValidationErrorModel("Email already exists")
    }

    
    // Encode (hash) password: 
    user.userPassword = hash(user.userPassword);

    const sql = `INSERT INTO users VALUES(default, '${user.firstName}', '${user.lastName}', '${user.userEmail}', '${user.userPassword}', '')`;
    const info = await dal.executeQueryAsync(sql);

    
    // no need to return back id, only uuid:
    user.userId = info.insertId;

    // Delete password so it won't returned to the frontend:
    delete user.userPassword;
    // Get JWT token and assign it to the user:
    const token = jwt.sign({ user: user }, "zot hahizdamnut lenasot et jey dablyou tea", { expiresIn: "7h" });
    return token;
}

// SHA: Secure Hashing Algorithm
// HMAC: Hash based Message Authentication Code

function hash(plainText) {

    if (!plainText) return null;

    // Hashing with salt:
    const salt = "LefichachNitkanasnoooAnooo";   // KenLatziporBeinHaetzim
    return crypto.createHmac("sha512", salt).update(plainText).digest("hex");

}

async function isEmailExists(email) {
    const sql = `SELECT EXISTS (SELECT * FROM users WHERE userEmail= "${email}")`;
    const response = await dal.executeQueryAsync(sql);
    return Object.values(response[0])[0];
}

export default {
    registerAsync,
    loginAsync
};