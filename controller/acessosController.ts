import AcessosService from '../services/acessosService'
import { BaseHttpController, controller, httpDelete, httpGet, httpPatch, httpPost, requestBody, requestParam } from 'inversify-express-utils';
import { inject } from 'inversify';

@controller('/api/v1/acessos')
class AcessosController extends BaseHttpController{

    private acessosService : AcessosService

    constructor(@inject('AcessosServices') AcessosService : AcessosService){
        super();
        this.acessosService = AcessosService;
    }

    @httpPost('')
    async post(@requestBody() novoAcesso : any) : Promise<any>{
        
         return await this.acessosService.create(novoAcesso)
         .then(acessoCriado => this.created(`/api/v1/acessos/${acessoCriado.id}`,{data : acessoCriado}))
         .catch(error => this.internalServerError(error));
    }

    @httpGet('/:id')
    async getById(@requestParam('id') id : String){
        return await this.acessosService.getUsuarioById(id)
        .then(result => this.ok({data : result}))
        .catch(error => this.internalServerError(error));
    }

}

export default  AcessosController;