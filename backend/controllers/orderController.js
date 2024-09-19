import orderModel from "../models/OrderModel.js"
import userModel from '../models/userModel.js'

// placing orders using Cash on delivery Method



const placeOrder = async (req,res) => {
    try {
        const {userId,items,amount,address} = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment :false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed"})


    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}

const placeOrderStripe = async (req,res) => {
    
}

const placeOrderRazorpay = async (req,res) => {
    
}

// All Orders data for Admin Panel
const allOrders = async (req,res) => {
    try {
       const orders = await orderModel.find({}) 
       res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}


// user order data for frontend
const userOrders = async(req,res)=>{
    try {
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
       console.log(error);
       res.json({success:false,message:error.message})
        
    }
}

const updateStatus = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}
export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}