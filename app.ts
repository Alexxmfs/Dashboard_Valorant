const app = require("teem");

const PORT = 3000;

app.run({
  port: PORT
});

console.log(`O servidor está rodando na porta http://localhost:${PORT}`);
