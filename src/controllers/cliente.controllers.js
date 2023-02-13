import ClienteServices from "../services/cliente.services.js";
import { clienteModel } from "../models/cliente.model.js";
const clienteServices = new ClienteServices(clienteModel);


export const getCliente = async (req, res) => {
    const { id } = req.params;
    if (id) {
        const cliente = await clienteServices.getClienteById(id);
        if (cliente) {
            res.status(200).send({ cliente });
        } else {
            rres.status(404).send("el cliente que busco no existe");
        }
    } else {
        try {
            const cliente = await clienteServices.getClientes();
            res.status(200).send(cliente);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

export const saveCliente = async (req, res) => {
    try {

        const newCliente = req.body;
        newCliente.clienteId = (Object.keys(await clienteServices.getClientes()).length)
        const cliente = await clienteServices.createCliente(newCliente);
        res.send('cliente creado con exito :' + cliente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteCliente = async (req, res) => {
    const clienteId = req.params.id;
    try {
        const borrado = await clienteServices.deleteClienteById({ _id: clienteId });
        if (borrado) {
            res.status(200).send({ borrado });
        } else {
            res.status(404).send("el cliente no  existe con ese id");
        }
    } catch (error) {
        console.log(error);
    }
};

export const updateCliente = async (req, res) => {
    const idOldCliente = req.params.id;
    const clienteNew = req.body;

    try {

        const modificado = await clienteServices.updateClienteByIdasync(
            idOldCliente,
            clienteNew
        );

        res.status(200).send(modificado);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const findClientByName = async (req, res) => {
    const { nombre } = req.params;
    try {
        const cliente = await clienteServices.findClientByName(nombre);
        if (cliente) {
            res.status(200).send(cliente);
        } else {
            res.send("el cliente que busco no existe");
        }
    } catch (error) {
        console.log(error);
    }
}