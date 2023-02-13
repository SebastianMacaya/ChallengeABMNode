class Services {
    constructor(model) {
        this.model = model;
    }

    getAll = async () => {
        try {
            const items = await this.model.find();
            return items;
        } catch (error) {
            console.log(error);
        }
    };



    getById = async (clienteId) => {
        try {
            const item = await this.model.findOne({ clienteId });
            return item;
        } catch (error) {
            console.log(error);
        }
    };

    createDocument = async (item) => {
        try {
            const document = await this.model.create(item);
            return document;
        } catch (error) {
            console.log(error);
        }
    };

    deleteById = async (clienteId) => {
        try {
            const deleted = await this.model.findByIdAndDelete(clienteId);
            return deleted;
        } catch (error) {
            console.log(error);
        }
    };
}

export default Services;