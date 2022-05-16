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

    res.status(200).json({ msg: "User created successfully", token });
}

const dashboard = async(req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
}

export { login, dashboard };