import {IEcommerce} from '../types/Ecommerce'
import {model,Schema} from 'mongoose';

const ecommerceSchema = new Schema({
    ecommerce: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    fundacao: {
        type: Number,
        required: true,
    }, 
    contato: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

export default model<IEcommerce>("Ecommerce", ecommerceSchema)



