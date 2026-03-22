import mysgl from 'mysql2';



const conection = mysgl.createConnection({
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE
})

export default conection;