import mongoose  from "mongoose";
import { type } from "os";

const orderItemSchema = new mongoose.model({
    ingredient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Ingredient',
        requried:true
    },
    ingredientName:{
        type:String,
        requried:true,
    },
    
        quantity:{
            type:Number,
            requried:true,
            min:1,
            default:1,
        },
        
            unitPrice:{
                type:Number,
                requried:true,
                min:0,
            },

            totalPrice:{
                type:Number,
                requried:true,          
                min:0
            },

});

const orderSchema = new mongoose.Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Store',
        requried: true,
    },
    storeName:{
        type:String,
        requried: true,
    },
    sandwitchLength:{
        type:String,
        requried: true,
        enum:['half','full','small']
    },
    orderDate:{
        type:Date,
        default: Date.now    
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
     ingredient:[orderItemSchema],
     subtotal:{
        type:Number,
        requried:true,
        min:0
     },
     taxrate:{
        type:Number,
        required:true,
        default:0.18
     },
    taxAmount:{
        type:Number,
        requried: true,
        min:0,
    } ,
    totalAmount:{
        type:Number,
        requried:true,
        min:0,
    }  ,
    breakDown:{
        ingredients:[{
            name:String,
            quantity:Number,
            unitPrice:Number,
            totalPrice:Number,
        }],
        subtotal:Number,
        tax:Number,
        total:Number,
    },


});

export const Order = mongoose.model('Order',orderSchema);
