
interface IUsuariosRepository {
    create(novoUsuario : any): Promise<any>;
    getUsuarioById(id : String): Promise<any>;
}


export default IUsuariosRepository;