import axios from "axios";
import fs from "fs";
import formData from "form-data";
import userModel from "../models/userModel.js";
import { response } from "express";

const removeBgImage = async () => {
  try {
    const { clerkId } = req.body;
    const user = await userModel.findOne({ clerkId });

    if (!user) {
      return response.json(401, "User not found");
    }

    if (user.creditBalance === 0) {
      return res.json(401, "low credit balance");
    }

    const imagePath = req.file.path;
    const imageFile = fs.createReadStream(imagePath);

    const formData = new formData();
    formData.append("image_file", imageFile);

    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.form(data, "binary").toString("base64");

    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
        success: true,
        resultImage,
        creditBalance: user.creditBalance - 1,
        message: "background removed"
    })
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { removeBgImage };