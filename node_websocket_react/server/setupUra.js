const axios = require("axios");

const init = async function () {
  const ura = (await axios({
    url: "http://api.totalvoice.com.br/ura",
    method: "post",
    headers: {
      "Access-Token": 'access_token',
    },
    data: {
      nome: `URA ${Math.floor(Math.random() * 10000)}`,
      dados: [
        {
          acao: "tts",
          coletar_dtmf: "6",
          timeout: "20",
          acao_dados: {
            mensagem:
              "Olá, seja bem vindo(a), digite o código de 6 dígitos que esta aparecendo em sua tela",
          },
        },
        {
          acao: "dinamico",
          acao_dados: {
              url:'https://82a10379757e20ead7a895b75ac84aec.m.pipedream.net'
          },
        },
      ],
    },
  })).data;
  console.log(ura);
};

init();