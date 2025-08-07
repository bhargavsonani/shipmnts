import { Store } from "../model/Store.js";

export const createStore  = async(req,res) =>{
    try{
        const{name,location} = req.body;
        const exist = await Store.findOne({name});
        if(exist){
            return res.status(400).json({
                msg:"store already exist"
            });
        }
        const store = new Store({name,location});
        await store.save();
    }
    catch(err){
        res.status(500).json({
            msg:"error during store insert."
        })
    }
}

export const getAllStore = async (req,res) =>{
    try {
        const stores = await Store.find({isActive:true});
        res.status(200).json({
            data:stores
        })
    } catch (error) {
        res.status(500).json({
            msg:"error during store fatching."
        })
    }
}