
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const proyecto = sequelize.define('proyect',{
    
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    priority:{
        type:DataTypes.INTEGER
    },
    description:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
    
},
{
timetamps:false
}

);
proyect.hasMany(task,{
    foreingKey:'proyecid',
    sourceKey:'id'
})

task.belongsTo(proyect,{
    foreingKey:'proyecid',
    targetId:'id'
})
//controlar es las funciones q se utlizan 
//timetamps para eliminar la fecha de creacion 
//200 la marca es coorecta en el dhunder 
//404 la marca de error
//500 el error del servidor 
