import bcrypt from "bcryptjs";

const hash = async (password) =>{
    const hash = await bcrypt.hash(password, 10);
    return hash
}

export default hash;