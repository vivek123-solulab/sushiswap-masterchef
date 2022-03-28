import express from "express"
import {getDepositEventDetails, getWithdrawEventDetails, getEmergencyWithdrawEventDetails} from "../controllers/masterchef.js";

const router = express.Router()


router.get("/getDepositEventDetails", getDepositEventDetails);
router.get("/getWithdrawEventDetails", getWithdrawEventDetails);
router.get("/getEmergencyWithdrawEventDetails", getEmergencyWithdrawEventDetails);

export default router;