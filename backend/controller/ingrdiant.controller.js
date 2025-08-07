import { Ingredient } from "../model/Ingredient.js";

export const createIngrediant = async (req,res) =>{
    try{
        const {name,category,basePrice} = req.body;
        const ingredient = new Ingredient({name,category,basePrice});
        await ingredient.save();

        res.status(201).json({
            msg:"insert succesfully",
            data:ingredient
        })
    }
    catch(err){
        res.status(500).json({
            msg:"error during insert ing."
        })
    }
}

export const getAlling = async (req,res) =>{
    try{
        
        const ingredient = await Ingredient.find({isAvailable:true});

        res.status(201).json({
            msg:"fatching succesfully",
            data:ingredient
        })
    }
    catch(err){
        res.status(500).json({
            msg:"error during fatching ing."
        })
    }
}


export const getingbycat = async (req,res) =>{
    try{
        
        const {category} = req.params;
        const ingredient = await Ingredient.find({category,isAvailable:true});

        res.status(201).json({
            msg:"fatching succesfully",
            data:ingredient
        })
    }
    catch(err){
        res.status(500).json({
            msg:"error during fatching ing."
        })
    }
}
