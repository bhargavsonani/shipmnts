import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },

    basePrice:{
        type:Number,
        required:true,
        min:0
    },
    isAvailable:{
         type:Boolean,
        default:true
    },



});

export const Ingredient = mongoose.model('Ingredient', ingredientSchema);