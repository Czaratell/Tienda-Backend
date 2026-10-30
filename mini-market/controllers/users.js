const usuarios = {};
usuarios.get = (req, res) =>{
    res.json ({
       msg: 'Get - Usuarios - controller'
    })
}

usuarios.post = (req, res) =>{
    res.json ({
       msg: 'post - Usuarios - controller'

    })
}

usuarios.put = (req, res) =>{
    res.json ({
       msg: 'put - Usuarios - controller'

    })
}

usuarios.delete = (req, res) =>{
    res.json ({
       msg: 'delete - Usuarios - controller'

    })
}

export default usuarios;