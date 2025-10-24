module.exports = {
  verificarLogin: (login, senha) => {
    let acesso;

    if (login === "Apolo" && senha === "7608") {
        acesso = "liberado"
    } else {
      acesso = "negado";
    }

    return `Olá, ${login}, seu acesso foi: ${acesso}`;
  }
};
