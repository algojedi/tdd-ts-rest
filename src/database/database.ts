import { Sequelize } from "sequelize";

// pass in application name, user name, password for db
const sequelize = new Sequelize('userdb', 'my-db-user', 'test123', {
    dialect : 'sqlite',
    storage : './database.sqlite'
})

export default sequelize