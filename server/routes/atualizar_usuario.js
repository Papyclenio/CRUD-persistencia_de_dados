import express from 'express'
import hash from '../utils/hash.js'
import conection from '../config/conection.js'

const routa_put = express.Router()

routa_put.put('/usuario/:id', async(req, res) =>{
    const id = Number(req.params.id)
     const { nome, data_nacs, genero, email, password } = req.body;
      const passwordCrypt = await hash(password);

    conection.query("update usuarios set  nome= ?, data_nacs =?, genero=?, email=?, password=? where id = ?;", [nome, data_nacs, genero, email, passwordCrypt, id], (e, reult) =>{
        if (e) {
            console.log(e);
            res.status(500).json({mensagem: `erro ao atualizar usuario`})
            
        } else {
            res.status(200).send({mensagem: `Usuario atualixado com sucesso!`})
        }
    })
})

export default routa_put;