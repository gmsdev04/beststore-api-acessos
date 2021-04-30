
interface IAcessosRepository {
    create(novoAcesso : any): Promise<any>;
    getUsuarioById(id : String): Promise<any>;
}


export default IAcessosRepository;