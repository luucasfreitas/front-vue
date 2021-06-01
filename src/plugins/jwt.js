
import  jwt  from 'jsonwebtoken';
const config = require('../config/jwt')
// const SchemaObject = require('node-schema-object');

// const userLoginToken = new SchemaObject(
//     {
//         token: String
//     },
//     {
//         methods: {
//             async gerarToken(params) {
//                 return jwt.sign(params,config.secret,{ expiresIn: 864000 });
//             },
//             verify(req, res, next) {
//                 const headerToken = req.headers['authorization'];
//                 if (typeof headerToken != 'undefined') {
//                     try {
//                         jwt.verify(headerToken, config.secret);
//                         next();
//                     } catch (err) {
//                         res.status(401).send('Verification Fail');
//                     }
//                 } else {
//                     //res.status(401).send();
//                     res.send(401);
//                 }
//             },
//             retornaCodigoTokenAcesso(Valor, req) {
//                 var headerTokenAcesso = req;
//                 var decoded = jwt.decode(headerTokenAcesso, { complete: true });
//                 if (Valor === "UsuarioAD") {
//                     return decoded.payload.UsuarioAD;
//                 }
//                 else if (Valor === "CodProf") {
//                     return decoded.payload.CodProf;
//                 }
//                 else if (Valor === "UsuarioTed") {
//                     return decoded.payload.UsuarioTed;
//                 }
//                 else if (Valor === "Produtos") {
//                     return decoded.payload.Produtos;
//                 }
//             },

//             verificaTokenAcessoDesconsideracao(req) {
//                 var TokenAcesso = req.body.token;
//                 if (typeof TokenAcesso != 'undefined') {
//                     try {
//                         var decoded = jwt.verify(TokenAcesso, 'REISADV@123!');
//                         return { status: true };

//                     } catch (err) {
//                         return { status: false };
//                     }
//                 } else {
//                     return { status: false };
//                 }
//             }
//         }
//     }
// );
export default {
    gerarToken: async (params) => {
        return jwt.sign(params,config.secret,{ expiresIn: 864000 });
    },
};



