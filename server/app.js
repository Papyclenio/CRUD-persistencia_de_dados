import express from "express";
import routa_get from "./routes/usuarios.js";
import routa_post from "./routes/cadastro.js";
import routa_deletar from "./routes/deletar_usuario.js";
import routa_put from "./routes/atualizar_usuario.js";

const app = express();

app.use(express.json());

app.use("/", routa_get);

app.use("/", routa_post);

app.use('/', routa_deletar)

app.use('/', routa_put)

export default app;
