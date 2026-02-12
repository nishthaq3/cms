import cron from "node-cron"
// import artifact from "../models/artifact"


export const testing=()=>{
	console.log("Executing cron function")
	cron.schedule("21 15 * * *",()=>{
		console.log("testing cron")
	})
}
export default testing