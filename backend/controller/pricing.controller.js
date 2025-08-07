import { Ingredient } from "../model/Ingredient.js";
import { Pricing } from "../model/Pricing.js";
import { Store } from "../model/Store.js";

export const createPricing = async (req,res)=>{
    try {
        const {storeId,ingredientId,month,year,sandwitchLength,priceMulti} = req.body;
        const store = await Store.findById({storeId});
        const ingridiant = await Ingredient.findById({ingredientId});

        const finalPrice = ingridiant.basePrice * priceMulti;
        const pricing = new Pricing({
            storeId,ingredientId,month,year,sandwitchLength,priceMulti,
            finalPrice
        })
        await pricing.save();

        res.status(201).json({
            msg:"price create succesfully",
            data:pricing
        })
    } catch (error) {
        res.status(500).json({
            msg:"error during price"
        })
    }
}