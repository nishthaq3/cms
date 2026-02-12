import Chat from "../models/chat.js"
import Thread from "../models/thread.js"
import thread from "../models/thread.js"

export const getChatsByThreadService=async(threadId)=>{
	return await Chat.find({thread:thread.Id})
	.populate("sender","name email")
	.sort({createdAt:1})
}

export const sendChatService = async({
	senderId,
	recieverId,
	message
})=>{


	const thread = await findOrCreateThreadService(senderId,recieverId);


	const chat=await Chat.create({
		thread: thread._id,
		sender: senderId,
		message
	})

	thread.lastMessage=message;
	thread.lastMessageAt=new Date();
	await thread.save()

	return chat;
}

export const findOrCreateThreadService=async(userId1,userId2)=>{
	const participants = [userId1,userId2].sort();

	let threads = await Thread.findOne({
		participants: {$all: participants},
		$expr: {$eq: [{$size: "$participants"},2]}
	})

	if(!threads){
		threads= await Thread.create({
			participants
		})
	}
	return threads;
}