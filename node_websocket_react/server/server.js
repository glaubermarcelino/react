const server = require("http").createServer();
const io = require("socket.io")(server);
const axios = require("axios");

const session = {};

io.on("connection", (socket) => {
  const code = `${Math.floor(Math.random() * 999999)}`.padStart(6, "0");
  const status = "waiting_call";

  sessions[code] = {
    socket,
    status: "waiting_call",
  };

  socket.emit("code", code);
  socket.emit("status", sessions[code].status);
});

setInterval(async function () {
  const response = (
    await axios({
      url: "https://api.pipedream.com/v1/souces/dc_nvuDQV/event_summaries",
      method: "get",
      headers: {
        Authorization: "Bearer autorization",
      },
    })
  ).data;

  const webhooks = response.data;
  for (const webhook of webhooks) {
    const body = webhook.event.body;

    if (!body || !body.uttimo_dtmf) continue;
    const code = Object.keys(sessions).find(code => code === body.ultimo_dtmf)

    if(!code)continue;

    sessions[code].status = 'received';
    sessions[code].socket.emit('status',sessions[code].status)
  }
}, 1000);

server.listen(3538);
