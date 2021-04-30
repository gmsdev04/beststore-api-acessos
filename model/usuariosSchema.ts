import * as mongoose from 'mongoose'

const usuariosSchema  = new mongoose.Schema({
    email: String,
    nome: String,
    sobrenome: String,
    lojaPadrao : String,
    dataNascimento: String,
    lojas : []

},{ collection: 'usuarios', versionKey: false });

export default usuariosSchema;