import app from "./app.js";
import {sequelize}  from "./database/database.js";

async function main(){
    try {
        await sequelize.sync({force:true})
        app.listen(3000)
        console.log("servidor en linea",3000);
    } catch (error) {
        console.log("error al conectar la base de datos :)",error);
    }
}
main();