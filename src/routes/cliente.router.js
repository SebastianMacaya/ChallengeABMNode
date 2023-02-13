
import { Router } from "express";
const cliente = Router();
import { clienteController } from "../controllers/index.js";

cliente
    .get("/cliente/:id?", clienteController.getCliente)
    .post("/cliente", clienteController.saveCliente)
    .delete("/cliente/:id", clienteController.deleteCliente)
    .put("/cliente/:id", clienteController.updateCliente)
    .get("/cliente/nombre/:nombre", clienteController.findClientByName);

export { cliente }