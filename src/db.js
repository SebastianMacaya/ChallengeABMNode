import mongoose from "mongoose";
import dotenv from "dotenv";
import { clienteModel } from "./models/cliente.model.js";
import { faker } from '@faker-js/faker';
dotenv.config();
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});






mongoose.connection.once("open", async () => {
    console.log("🖥️ ", "Conectado a la base de datos");
    // Elimino datos antes de crear datos de prueba
    await clienteModel.deleteMany();
    // Creo datos de prueba
    for (let i = 0; i < 10; i++) {
        const cliente = new clienteModel({
            clienteId: i,
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            fechaNacimiento: faker.date.past(),
            cuit: faker.finance.mask(),
            direccion: faker.address.streetAddress(),
            telefono: faker.phone.number(),
            email: faker.internet.email()
        });
        await cliente.save();
    }

    console.log("💾 ", "Datos de prueba creados");
});
mongoose.connection.on("error", (err) => {
    console.log(err);
});

export default mongoose.connection;