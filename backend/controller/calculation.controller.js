import { queryObjects } from "node:v8";
import { Ingredient } from "../model/Ingredient";
import { Pricing } from "../model/Pricing";
import { Store } from "../model/Store";

export const calculate = async (req,res) =>{
    try{
        const {storeId,ingredientId,orderDate} =req.body;
        const store = await Store.findById(storeId);
        const date = orderDate ;
        const month = date.getMonth() +1;
        const year = date.getFullYear();

        let subTotal = 0;
        const ordetIng = [];
        const breakdown = [];

        for(const item in Ingredient){
            const {ingredientId,quantity =1} =item;

            const ingredient = await Ingredient.findById(ingredientId);

            let price = await Pricing.findOne({
                storeId,ingredientId,orderDate,month,year,sandwitchLength,
            })

                unitPrice = Pricing.finalPrice;
                const length = {
                    'half' : 0.5,
                    "small" : 0.1,
                    "full" : 1.0
                }

                const storemul = {
                    "amd" : 1.0,
                    "Mumbai" : 1.2,
                    "del": 1.1
                }

                unitPrice = ingredient.basePrice *length*storemul;
        }
        const totalPrice = unitPrice*quantity;
    }
}