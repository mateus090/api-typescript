//explorando o mongo db
import {Document} from "mongoose"

export interface IEcommerce extends Document{
    ecommerce: string
    link: string   
    fundacao: Number
    contato: Number
}