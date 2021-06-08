const userController = {}

//Show all values
userController.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err){
            res.send(err);
        } else {
            conn.query('SELECT * FROM users', (err, users)=>{
                if(err){
                    res.send(err)
                } else {
                    res.send(users)
                }
            })
        }
    })
}

//Show single value
userController.single = (req,res) =>{
    const { id } = req.params

    req.getConnection((err,conn)=>{
        if(err){
            res.send(err);
        } else {
            conn.query(`SELECT * FROM users WHERE id=?`, [id], (err, user)=>{
                if(err){
                    res.send(err)
                } else {
                    user.length>0 ? res.send(user) : res.send('User not found')
                }
            })
        }
    })
}

//Add value to db
userController.add = (req,res) =>{
    const {name, email, username} = req.body

    req.getConnection((err,conn)=>{
        if(err){
            res.send(err);
        } else {
            conn.query(`INSERT INTO users (name, email, username) values (?,?,?);`, [name,email,username], (err, user)=>{
                if(err){
                    res.send(err)
                } else {
                    res.redirect('/')
                }
            })
        }
    })
}

//Update value from db
userController.update = (req,res) =>{
    const { name,email,username } = req.body;
    const { id } = req.params;

    req.getConnection((err,conn)=>{
        if(err){
            res.send(err);
        } else {
            conn.query(`UPDATE users SET name=?, email=?, username=? WHERE id=?`,[name,email,username,id,], (err, user)=>{
                if(err){
                    res.send(err)
                } else {
                    res.redirect(`/${id}`)
                }
            })
        }
    })
}

//Delete value from db
userController.delete = (req,res) =>{
    const { id } = req.params

    req.getConnection((err,conn)=>{
        if(err){
            res.send(err);
        } else {
            conn.query(`DELETE FROM users WHERE id=?`,[id], (err, user)=>{
                if(err){
                    res.send(err)
                } else {
                    res.redirect('/')
                }
            })
        }
    })
}


module.exports = userController