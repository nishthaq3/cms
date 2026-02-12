import express from "express"
const router=express.Router();

router.post("/test",(req,res)=>{
	console.log("Github webhook recived")
	console.log(req.body)

	res.status(200).json({recieved:true})

	res.json({recieved: true});
})
export default router;