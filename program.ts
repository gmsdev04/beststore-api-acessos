import StartUp from './startup';

let app = StartUp.server.build();


let port = process.env.PORT || '3542'

app.listen(port, function(){
    console.log(`Servidor executando na porta ${port}`);
})