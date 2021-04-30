import IUsuariosRepository from '../repository/IUsuariosRepository'
import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'inversify';

@injectable()
class UsuariosServices {
    constructor( @inject("IUsuariosRepository") private repository: IUsuariosRepository ) {}
    
    async create(novoUsuario : any){
        return await this.repository.create(novoUsuario);
    }

    async getUsuarioById(id : String){
        return await this.repository.getUsuarioById(id);
    }

   
}

export default  UsuariosServices;