import mongoose from "mongoose";

const priceSchema = new mongoose.model(
    {
        storeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Store',
            requried: true
        },

        ingredientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingedient',
            requried: true
        },

        month: {
            type: Number,
            requried: true,
            min: 1,
            max: 12
        },
        year: {
            type: Number,
            requried: true
        },
        sandwitchLength:{
            type:String,
            requried:true,
            enum:['half','full','small'],  
        },
           priceMulti:{
            type:Number,
            requried:true,
            min:0
         },
         
            finalPrice:{
                type:Number,
                required:true,
                min:0
            },
    }
)

export const Pricing = mongoose.model("Pricing",priceSchema);