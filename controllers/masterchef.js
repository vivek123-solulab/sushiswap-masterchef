import MasterChefs from "../models/masterchef.js";
import Web3 from 'web3';
import abi from '../abi/masterchef.js';
import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://localhost:27017/masterchef?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false");

export const getDepositEventDetails = async (req, res, next) => {
    var web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.INFURA_URL));
    const {user,pid,amount,transactionHash} = req.body;
    const masterChef = new MasterChefs({
        user,
        pid,
        amount,
        transactionHash
    })
    console.log('masterchef ===>', masterChef._id.toString().trim())
        const contract = new web3.eth.Contract(abi,process.env.CONTRACT_ADDRESS);
        const depositEvents = contract.events.Deposit({
            filter: { myIndexedParam: [20, 23], myOtherIndexedParam: '0x123456789...' }, // Using an array means OR: e.g. 20 or 23
            fromBlock: 0
        }, async function (error, event) { 
                res.status(200).json(event.returnValues) 
                console.log('events ===>', event.returnValues) 
                console.log('transactionHash ===>', event.transactionHash)
                await client.connect();
                const database = client.db("masterchef");
                const haiku = database.collection("masterchefs");
                const result = await haiku.insertOne(event);
                console.log('result ===>', result)
            })
        .on('data', function (event) {
        console.log(event); // same results as the optional callback above
        })
        .on('changed', function (event) {
        // remove event from local database
        })
        .on('error', console.error);  
};

export const getWithdrawEventDetails = async (req, res, next) => {
    var web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.INFURA_URL));
    const {user,pid,amount,transactionHash} = req.body;
    const masterChef = new MasterChefs({
        user,
        pid,
        amount,
        transactionHash
    })
    const masterchef = await MasterChefs.find({
        transactionHash
    })
    console.log('masterchef ===>', masterChef._id.toString().trim())
        const contract = new web3.eth.Contract(abi,process.env.CONTRACT_ADDRESS);
        const withdrawEvents = contract.events.Withdraw({
            filter: { myIndexedParam: [20, 23], myOtherIndexedParam: '0x123456789...' }, // Using an array means OR: e.g. 20 or 23
            fromBlock: 0
        }, async function (error, event) { 
                res.status(200).json(event.returnValues) 
                console.log('events ===>', event.returnValues) 
                console.log('transactionHash ===>', event.transactionHash)
                await client.connect();
                const database = client.db("masterchef");
                const haiku = database.collection("masterchefs");
                const result = await haiku.insertOne(event);
                console.log('result ===>', result)
            })
        .on('data', function (event) {
        console.log(event); // same results as the optional callback above
        })
        .on('changed', function (event) {
        // remove event from local database
        })
        .on('error', console.error);  

};

export const getEmergencyWithdrawEventDetails = async (req, res, next) => {
    var web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.INFURA_URL));
    const {user,pid,amount,transactionHash} = req.body;
    const masterChef = new MasterChefs({
        user,
        pid,
        amount,
        transactionHash
    })
    const masterchef = await MasterChefs.find({
        transactionHash
    })
    console.log('masterchef ===>', masterChef._id.toString().trim())
        const contract = new web3.eth.Contract(abi,process.env.CONTRACT_ADDRESS);
        const EmergencyWithdrawEvents = contract.events.EmergencyWithdraw({
            filter: { myIndexedParam: [20, 23], myOtherIndexedParam: '0x123456789...' }, // Using an array means OR: e.g. 20 or 23
            fromBlock: 0
        }, async function (error, event) { 
                res.status(200).json(event.returnValues) 
                console.log('events ===>', event.returnValues) 
                console.log('transactionHash ===>', event.transactionHash)
                await client.connect();
                const database = client.db("masterchef");
                const haiku = database.collection("masterchefs");
                const result = await haiku.insertOne(event);
                console.log('result ===>', result)
            })
        .on('data', function (event) {
        console.log(event); // same results as the optional callback above
        })
        .on('changed', function (event) {
        // remove event from local database
        })
        .on('error', console.error);  
};