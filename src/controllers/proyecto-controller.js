import { DataTypes } from "sequelize"
import {proyecto} from "../models/proyecto.js"

export const crearproyecto= async (req,res)=>{

    try {
    const {name,priority,description,estado}=req.body

       // const{id} =res.params
        const newproyect = await proyecto.create({
            name,
            description,
            priority,
            estado
        })
        res.status(200).json({menssage:'recurso creado con exito ',newproyect:{
            id:newproyect.id,
            name:newproyect.name
        }})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
  
}
export const getproyecto= async (req,res)=>{

    try{
        const proyecto= await proyecto.findALL()
        res.json(proyecto)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
export const deleteproyecto= async (req,res)=>{

    try{
        const {id}=req.params;
      await proyecto .destroy({
        where:{
            id,
        }
      });
      res.status(200).json({message:'proyecto eliminado'})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
export const updateproyecto= async (req,res)=>{

    try{
        const {id}=req.params;
        const{name,priority,description,estado}=req.body
        const proyect = await proyecto.findByPk(id);
        proyect.name=name;
        proyect.priority=priority;
        proyect.description=description;
        proyect.estado=estado;
      await proyect .save()
        res.status(200).json({message:'proyecto actualizado',proyect})
    
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
//DataTypes   son los tipos de datos que se manejan en los campos ejemplo id: type:datatypes.INTEGRER
//boolean falso o verdadero
