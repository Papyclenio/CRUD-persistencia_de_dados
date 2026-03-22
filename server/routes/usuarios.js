import express from 'express';
import conection from '../config/conection.js';

const routa_get = express.Router();

 routa_get.get('/usuarios/', (req, res) => {
  conection.query("select * from usuarios", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const dados = result.map((item) => {
        return {
          id: item.id,
          nome: item.nome,
          "data de nascimento": item.data_nacs,
          genero:  item.genero,
          email: item.email
        };
      });
      res.status(200).json(dados);
    }
  });
})

export default routa_get;