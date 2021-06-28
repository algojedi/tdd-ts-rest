"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// pass in application name, user name, password for db
const sequelize = new sequelize_1.Sequelize('userdb', 'my-db-user', 'test123', {
    dialect: 'sqlite',
    storage: './database.sqlite'
});
exports.default = sequelize;
