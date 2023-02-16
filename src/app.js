import Express  from "express";
const app = Express()
import proyectorouter from "./router/proyect-router.js"

app.use(Express.json())
app.use(proyectorouter)
export default app;