import {Webhook} from 'svix';
import userModel from '../models/userModel.js';

const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        
        // Verifying the webhook signature
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        const { data, type } = req.body;

        switch (type) {
            case "user.created": {
                // Prepare user data for the new user created event
                const userData = {
                    clerkId: data.id,
                    email: data.email_address[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                // Create the new user
                await userModel.create(userData)
                res.status(201).json({
                    success: true,
                    user
                });
                break;
            }

            case "user.updated": {
                // Prepare updated user data
                const userData = {
                    email: data.email_address[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                };

                // Find and update the user by clerkId
                const updatedUser = await userModel.findOneAndUpdate(
                    { clerkId: data.id },
                    userData,
                    { new: true }  // Return the updated user object
                );

                if (!updatedUser) {
                    return res.status(404).json({
                        success: false,
                        msg: 'User not found'
                    });
                }

                res.status(200).json({
                    success: true,
                    user: updatedUser
                });
                break;
            }

            case "user.deleted": {
                // Delete the user by clerkId
                const deletedUser = await userModel.findOneAndDelete({ clerkId: data.id });

                if (!deletedUser) {
                    return res.status(404).json({
                        success: false,
                        msg: 'User not found'
                    });
                }

                res.status(200).json({
                    success: true,
                    msg: 'User deleted'
                });
                break;
            }

            default:
                return res.status(400).json({
                    success: false,
                    msg: 'Unsupported event type'
                });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
};


const userCredits = async (req, res)=> {
    try {
        const {clerkId} = req.body

        const userData = await userModel.findOne({clerkId})

        res.json({
            success: true, credits: userData.creditBalance
        })
    } catch (error) {
        console.log(error.message);
    }
}



export { clerkWebhooks, userCredits };


