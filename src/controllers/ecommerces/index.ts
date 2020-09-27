
import{Request,Response} from 'express'

import {IEcommerce} from '../../types/Ecommerce'

import Ecommerce from '../../models/Ecommerce'



const getEcommerce = async(req: Request, res: Response): Promise<void> =>{
    try{
        
        const ecommerces: IEcommerce[] = await Ecommerce.find()
       
        res.status(200).json({ecommerces})
    }
    catch(error){
        console.log(error)
        throw error
    }
}

const addEcommerce = async(req: Request, res: Response): Promise<void> =>{
    try{
       
        const body = req.body as Pick <IEcommerce, "ecommerce" | "link" | "fundacao" | "contato">
      
        const ecommerce: IEcommerce = new Ecommerce({
            ecommerce: body.ecommerce,
            link: body.link,
            fundacao: body.fundacao,
            contato: body.contato,
        })
        
        const newEcommerce: IEcommerce = await ecommerce.save()
      
        const allEcommerces: IEcommerce[] = await Ecommerce.find()
        
        res.status(201).json({
            message: "Ecommerce inserido com sucesso",
            ecommerce: newEcommerce,
            ecommerces: allEcommerces
        })
    }
    catch(error){
        throw error
    }

}


const deleteEcommerce = async(req: Request, res: Response): Promise<void> => {
    try{
        
        const deletedEcommerce = await Ecommerce.findByIdAndRemove(req.params.id)
        
        const allEcommerces: IEcommerce[] = await Ecommerce.find()
        res.status(200).json({
            message: "Ecommerce removido",
            ecommerce: deletedEcommerce,
            ecommerces: allEcommerces
        })
    }
    catch(error){
        console.log(error)
        throw error
    }
}

const updateEcommerce = async(req: Request, res: Response): Promise<void> =>{
    try{
        
        const {
            params: {id},
            body,
        } = req
        
        const updateEcommerce: IEcommerce | null = await Ecommerce.findByIdAndUpdate({_id: id}, body)
        
        const allEcommerces: IEcommerce[] = await Ecommerce.find()
        
        res.status(200).json({
            message: "Ecommerce atualizado",
            ecommerce: updateEcommerce,
            ecommerces: allEcommerces
        })
    }
    catch(error){
        console.log(error)
        throw error
    }
}

export {getEcommerce,addEcommerce, deleteEcommerce, updateEcommerce}