"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
// import bodyParser from 'body-parser'
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
dotenv_1.default.config();
const app = express_1.default();
// app.use(bodyParser)
app.use(helmet_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const mockDB = { username: 'test', password: 'test', email: 'test@test.com' };
// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('hello');
});
// handle registering a user
app.post('/api/1.0/users', (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !email || !password) {
        return res
            .status(400)
            .json({ success: false, message: 'invalid input', detail: 'one or more fields are blank or missing' });
        // ErrorResponseBody
    }
    return res.status(200).json({ message: 'User created', userId: 0 });
});
exports.default = app;
