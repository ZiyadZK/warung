import { Sequelize } from "sequelize";

const db = new Sequelize('db_warung', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: false
})

await db.authenticate().then(() => {
    console.log('Database is Connected!')
}).catch(error => {
    console.log('Database is not Connected! error: ', error)
})

export default db;