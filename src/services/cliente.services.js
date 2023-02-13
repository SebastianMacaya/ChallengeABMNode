import Services from "./all.services.js";
class ClienteServices extends Services {
    constructor(model) {
        super(model);
    }


    getClientes = async () => await this.getAll();
    getClienteById = async (id) => await this.getById(id);
    createCliente = async (item) => await this.createDocument(item);
    deleteClienteById = async (id) => await this.deleteById(id);
    updateClienteByIdasync = async (id, cliente) => {
        const { nombre, apellido, fechaNacimiento, cuit, direccion, telefono, email } = cliente
        try {
            await this.model.findByIdAndUpdate(id, {
                nombre, apellido, fechaNacimiento, cuit, direccion, telefono, email
            })
            const updated = await this.model.findById(id);
            return updated
        }
        catch (error) { console.log(error) }
    }
    findClientByName = async (nombre) => {
        try {
            const cliente = await this.model.find({ nombre: { $regex: nombre, $options: 'i' } })
            return cliente
        }
        catch (error) { console.log(error) }
    }
}
export default ClienteServices;