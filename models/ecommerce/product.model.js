import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  description:{
    require:true,
    type:String
  },
  name:{
    required:true,
    type:String
  },
  productImage:{
    type:String
  },
  price:{
    type:Number,
    default:0
  },
  stock:{
    type:Number,
    default:Number
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
},{timestamps})


export const Product = new mongoose.model("Product",productSchema)