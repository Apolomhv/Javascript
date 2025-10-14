module.exports = {
  gerarMensagemPersonalizada: (nome, idade, cidade) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

    return `Olá, ${nome}! Você tem ${idade}, então é um(a) ${faixaEtaria}, e mora na cidade de ${cidade}.`;
  }
};
