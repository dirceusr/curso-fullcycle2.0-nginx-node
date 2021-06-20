const db = require('./db')

const queryInterface = db.sequelize.getQueryInterface();

    const connection =  db.mysql.createConnection(db.configdb);
    connection.query('CREATE DATABASE IF NOT EXISTS nodedb;');

const Pessoa=db.sequelize.define('people',{
    id:{
        type:db.Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:db.Sequelize.STRING
    }
})
module.exports=Pessoa

queryInterface.createTable('people',{
        id:{
            type:db.Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:db.Sequelize.STRING
        }
});
