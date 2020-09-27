// vamos explorar o MongoDB
import {Document} from "mongoose"
 
export interface IUser extends Document{
    name: String
    age: Number
    uf: String
    city: String
    email: String
}

