import express from "express";
import hash from "../utils/hash.js";
import conection from "../config/conection.js";

const routa_post = express.Router(); 

routa_post.post("/cadastro", async (req, res) => {
  const { nome, data_nacs, genero, email, password } = req.body;
  const passwordCrypt = await hash(password);

  conection.query(
    "insert into usuarios values(default, ?, ?, ?, ?, ?);",
    [nome, data_nacs, genero, email, passwordCrypt],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send("Usuario criado com sucesso!", result);
      }
    },
  );
});

export default routa_post;