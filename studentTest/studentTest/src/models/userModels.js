import mongoose from "mongoose";

//A library to help you hash passwords//
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'



const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    
   

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, //claudinary url//
        required:true,
    },
    coverimage:{
        type:String,
        default:"" //claudinar url//
    },
    password:{
        type:String,
        required:[true,'Password is required'], 
    },
    refreshToken:{
        type:String
    }

},{timestamps:true})

//middleware-here do some operation before saving data//
//here we want this func to run only when new password is entered or modified , not every time (otherwise it will also change password if any other data is aved in db)//
userSchema.pre("save",async function (next) {
    if(!this.isModified("password"))
        return next;
    this.password=await bcrypt.hash(this.password,10) //password encryption //
    next
})

//we can also inject custom methods //
//why not using arrow func-because arrow functions don’t have their own this, and here we need this to point to the current user document.//
userSchema.methods.isPasswordCorrect=async function (password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessTokens=function(){
    return jwt.sign(
        {
        _id:this.id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
       },
       process.env.ACCESS_TOKEN_SECRET,
       {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
       }
)
}
userSchema.methods.generateRefreshTokens=function(){
      return jwt.sign(
        {
        _id:this.id
       },
       process.env.REFRESH_TOKEN_SECRET,
       {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
       }
)
}

export const User=mongoose.model("User",userSchema)