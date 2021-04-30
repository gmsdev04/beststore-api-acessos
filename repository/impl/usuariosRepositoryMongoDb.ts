import * as mongoose from 'mongoose'
import IUsuariosRepository from '../IUsuariosRepository'
import usuariosSchema from '../../model/usuariosSchema'
import {Model, Document, Query} from 'mongoose'
import { injectable } from 'inversify';

@injectable()
class LojasRepositoryMongoDb implements IUsuariosRepository{
    private _model : Model<Document<any>>;

    constructor(){
        this._model = mongoose.model('usuarios',usuariosSchema);
    }
    async getUsuarioById(id: String): Promise<any> {
        return await this._model.findById(id);
    }
    
    async create(novoUsuario : any) : Promise<any>{
        return await this._model.create(novoUsuario);
    }

    
}

export default LojasRepositoryMongoDb;

