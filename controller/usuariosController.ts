import UsuariosService from '../services/UsuariosService'
import {Request, Response} from 'express'
import { BaseHttpController, controller, httpDelete, httpGet, httpPatch, httpPost, requestBody, requestParam } from 'inversify-express-utils';
import { inject } from 'inversify';

@controller('/api/v1/usuarios')
class UsuariosController extends BaseHttpController{

    UsuariosService : UsuariosService

    constructor(@inject('UsuariosService') UsuariosService : UsuariosService){
        super();
        this.UsuariosService = UsuariosService;
    }

    @httpPost('')
    async post(@requestBody() novoUsuario : any) : Promise<any>{
        
         return await this.UsuariosService.create(novoUsuario)
         .then(lojaCriada => this.created(`/api/v1/usuarios/${lojaCriada.id}`,{data : lojaCriada}))
         .catch(error => this.internalServerError(error));
    }

    @httpGet('/:id')
    async getById(@requestParam('id') id : String){
        return await this.UsuariosService.getUsuarioById(id)
        .then(result => this.ok({data : result}))
        .catch(error => this.internalServerError(error));
    }

}

export default  UsuariosController;