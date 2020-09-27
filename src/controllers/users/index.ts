// importa express
import{Request,Response} from 'express'
// importa a interface do client
import {IUser} from '../../types/User'
// importa o modelo do client
import User from '../../models/User'



const getUser = async(req: Request, res: Response): Promise<void> =>{
    try{
        
        const users: IUser[] = await User.find()
        
        res.status(200).json({users})
    }
    catch(error){
        console.log(error)
        throw error
    }
}


const addUser = async(req: Request, res: Response): Promise<void> =>{
    try{
        
        const body = req.body as Pick <IUser, "name" | "age" | "uf" | "city" | "email">
        
        const user: IUser = new User({
            name: body.name,
            age: body.age,
            uf: body.uf,
            city: body.city,
            email: body.email
        })
        
        const newUser: IUser = await user.save()
     
        const allUsers: IUser[] = await User.find()
        
        res.status(201).json({
            message: "Usuário inserido com sucesso",
            user: newUser,
            users: allUsers
        })
    }
    catch(error){
        throw error
    }

}

const deleteUser = async(req: Request, res: Response): Promise<void> => {
    try{
       
        const deletedUser = await User.findByIdAndRemove(req.params.id)
     
        const allUsers: IUser[] = await User.find()
        res.status(200).json({
            message: "Usuário removido", 
            user: deletedUser, 
            users: allUsers 
        })
    }
    catch(error){
        console.log(error)
        throw error
    }
}

const updateUser = async(req: Request, res: Response): Promise<void> =>{
    try{
      
        const {
            params: {id},
            body,
        } = req
        
        const updateUser: IUser | null = await User.findByIdAndUpdate({_id: id}, body)
        
        const allUsers: IUser[] = await User.find()
        
        res.status(200).json({
            message: "Usuário atualizado",
            user: updateUser,
            users: allUsers
        })
    }
    catch(error){
        console.log(error)
        throw error
    }
}



export {getUser,addUser, deleteUser, updateUser}