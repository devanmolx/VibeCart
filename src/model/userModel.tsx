import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    images: {
        type:[String],
        required:true
    }
    
} , {_id:false})

const orderSchema = new mongoose.Schema({

    items:[cartSchema],
    date:{
        type:Date,
        default: Date.now
    }

} , {_id:false})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    pincode: {
        type: Number,
    },
    cart: [cartSchema],
    orders: [orderSchema]
})

const USER = mongoose.models.users || mongoose.model("users", userSchema);

export default USER