import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        require:true
    },
    isActive:{
        type:Boolean,
        default:true,
    }
});

export const Store = mongoose.model('Store',storeSchema);

