import userModel from "../models/user.js"
import bcrypt from 'bcrypt';

class UserController {

    static login = (req,res) =>{
        res.render("login")
    }

    static verifyLogin = async (req,res) =>{
        try {
            const {email, password} = req.body
            const result = await userModel.findOne({email:email})
            // console.log(result)

            if(result != null){    
                const isMatch = await bcrypt.compare(password, result.password)
            
                if(result.email == email && isMatch){
                    res.send("<h3>Login Successfully!<h3>")
                } else {
                    res.send("<h3>Invalid Password.. !</h4>")
                }
            } else{
                res.send("<h3>Invalid Email Id.. !</h3>")
            }
           
        } catch (error) {
            console.log(error)
        }
    }

    static registration = (req,res) =>{
        res.render("registration")
    }

    static createUser = async (req, res) => {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        try {
            
            // Creating new user
            const doc = new userModel({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword,
            })
            // saving document
            await doc.save()
            res.redirect('/login')

        } catch (error) {
            console.log(error)
        }
    }

}

export default UserController;