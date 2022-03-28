import mongoose from "mongoose";

const MasterChef = mongoose.Schema({
    user: String,
    pid: Number,
    amount:Number,
    transactionHash: Number
})

const MasterChefs = mongoose.model("masterchef", MasterChef)

export default MasterChefs;