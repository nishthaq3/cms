import Artifact from "../models/artifact.js";
import cloudinary from "../config/cloudinary.js";
// Create a new artifact
export const createArtifactService = async ({
    title,
    content,
    userId,
	filePath
}) => {
    if(!title || !content) {
        throw new Error('Title and Content are required');
    }
	let mediaUrl=null
	if(filePath){
		const uploadResult=await cloudinary.uploader.upload(
			filePath,
			{
				folder: "cms-artifacts"
			}
		)
		mediaUrl=uploadResult.secure_url

		fs.unlinkSync(filePath)
	}
	console.log("Media before saving:",mediaUrl)
    const artifact = await Artifact.create({
        title,
        content,
        author: userId,
		media: filePath || null
    });
    return artifact;    
};

export const getArtifactsService = async ({ userId, role }) => {
  if (role === "ADMIN") { 
    return await Artifact.find().populate("author", "name email role");
  }

  return await Artifact.find({ author: userId });
};