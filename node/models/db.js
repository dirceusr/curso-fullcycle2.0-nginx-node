const configdb = {
    host:'db',
    user:'root',
    password:'root'
};

const config = {
    host:'db',
    user:'root',
    password:'root',
    database:'nodedb'
};
const mysql = require('mysql')

const Sequelize = require('sequelize')
const sequelize=new Sequelize('nodedb','root','root',{
    host:'db',
    dialect:'mysql',
    define: {
        timestamps: false
    }  
})

module.exports={
    config:config, 
    mysql:mysql,
    Sequelize:Sequelize,
    sequelize:sequelize,
    configdb:configdb

}