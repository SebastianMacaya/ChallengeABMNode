import { Router } from "express";
import * as ruta from "./index.js";
const router = Router();

router.use("/api", ruta.cliente);

export { router };