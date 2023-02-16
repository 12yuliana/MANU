import  Sequelize  from "sequelize";
export const sequelize = new Sequelize('nueva', 'postgres', 'hola1234', {
    host: 'localhost',
    dialect:'postgres' 
  }); 

  