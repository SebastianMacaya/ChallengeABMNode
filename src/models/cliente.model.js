import mongoose from "mongoose";
const Schema = mongoose.Schema(
    {
        clienteId: {
            type: String,

        },
        nombre: {
            type: String,
            required: true,

        }
        ,
        apellido: {
            type: String,
            required: true,
        }
        ,
        fechaNacimiento: {
            type: Date,
        }
        ,
        cuit: {
            type: String,
        },
        direccion: {
            type: String,
        },
        telefono: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },

    }
)


export const clienteModel = mongoose.model("cliente", Schema);