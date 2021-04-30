import IAcessosRepository from '../repository/IAcessosRepository'
import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'inversify';

@injectable()
class AcessosServices {
    constructor( @inject("IAcessosRepository") private repository: IAcessosRepository ) {}
    
    async create(novoAcesso : any){
        return await this.repository.create(novoAcesso);
    }

    async getUsuarioById(id : String){
        return await this.repository.getUsuarioById(id);
    }

   
}

export default  AcessosServices;