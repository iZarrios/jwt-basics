import CustomAPIError from '../errors/custom-error.js';
import jwt from 'jsonwebtoken';
const login = async(req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new CustomAPIError('Please provide a username and password', 400);
    }
    const id = new Date().getDate();

    //only for demo betteer ID in the db
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    res.send(`username: ${username}\n password: ${password}`);
}

const dashboard = async(req, res, next) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        message: "Hello, John",
        luckyNumber
    });
}

export { login, dashboard };