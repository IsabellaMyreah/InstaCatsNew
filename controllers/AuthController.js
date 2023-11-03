// 1° PRECISO importar o arquivo de módulo
const User = require('../models/User')

module.exports = class AuthController{
    static login(request, response){
        // render -> Diretório do projeto
        // redirect -> Mandar para uma ROTA - 
        return response.render('auth/login')
    }
    static register(require, response){
        response.render('auth/register')
        return
    }
    static async registerPost(){}
}

