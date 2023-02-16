import { Router } from "express";
import { crearproyecto, getproyecto, deleteproyecto, updateproyecto} from "../controllers/proyecto-controller.js";
const router=Router()

router.post('/proyect',crearproyecto)
router.get('/proyect',getproyecto)
router.delete('/proyect/:id',deleteproyecto)
router.get('/proyect/:id')
router.put('/proyect/:id',updateproyecto)
export default router
// 
