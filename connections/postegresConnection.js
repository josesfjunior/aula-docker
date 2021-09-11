const { Pool } = require("pg");
const Connection = new Pool({
  database: "testes",
  user: "postgres",
  password: "junior123",
  host: "bd",
  port: 5432,
});

async function Try() {
  try {
    await Connection.connect();
    console.log("Banco conectado");
  } catch (err) {
    console.error({ error: err });
  }
}
Try();
module.exports = Connection ;
