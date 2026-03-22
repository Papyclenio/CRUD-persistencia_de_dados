import express from 'express'
import conection from '../config/conection.js';

const routa_deletar = express.Router()

routa_deletar.delete("/usuario/:id", (req, res) => {
  const id = Number(req.params.id);
  conection.query("delete from usuarios where id=?;", id, (e, result) => {
    if (e) {
      console.error(e);
      res.status(500).json({ erro: `${e}` });
    } else {
      res.status(200).send({mensagem: `Usuario deletado com sucesso!`});
    }
  });
});

export default routa_deletar;