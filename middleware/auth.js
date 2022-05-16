import jwt from 'jsonwebtoken';
import CustomAPIError from '../errors/custom-error.js';
import { StatusCodes } from 'http-status-codes';

const authenticationMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomAPIError('No token provided', StatusCodes.UNAUTHORIZED);
    }

    const token = authHeader.split(' ')[1]; // Bearer TOKEN

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    } catch (error) {
        throw new CustomAPIError('No auth to this route', StatusCodes.UNAUTHORIZED);
    }
}

export default authenticationMiddleware;