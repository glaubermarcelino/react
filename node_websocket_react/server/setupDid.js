const axios = require("axios");

const init = async function () {
  const did = (
    await axios({
      url: "https://api.totalvoice.com.br/did/35016301",
      method: "put",
      headers: {
        "Access-Token": "access_token",
      },
      data: {
        ura_id: 28143,
        ramal_id: null,
      },
    })
  ).data;
  console.log(did);
};

init();
