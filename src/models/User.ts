
import {IUser} from '../types/User'

import {model, Schema} from 'mongoose'

const userSchema: Schema = new Schema(
    {
        name: {
            type: String, 
            required: true,

        },
        age: {
            type: Number,
            required: true,
        },        
        uf: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
)

export default model<IUser>("User", userSchema)