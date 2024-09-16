let usuarioOn = true;       // o usuário está logado
let permissaoAdm = true; // o usuário tem permissão de administrador

//operador AND para verificar ambas as condições
let acessoPermitido = usuarioOn && permissaoAdm;

//Exibindo o resultado no console
if (acessoPermitido) {
    console.log("Acesso concedido. Você tem permissão de administrador.");
} else {
    console.log("Acesso negado. Verifique se você está logado e tem permissão de administrador.");
}
