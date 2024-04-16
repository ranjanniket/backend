const userModel = require("../models/userModel");
const videoInfoModel = require("../models/videoInfoModel");

// login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//Register Callback
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const videoController = async (req, res) => {
  try {
    const { email, video2, video3, video1, completed } = req.body;
    const videoData = await videoInfoModel.findOne({ email });
    if (videoData) {
      const data = await videoInfoModel.updateMany({ email }, { $set: { video1, video2, video3, completed } } );
      if (data)  {
        res.status(201).json({
          success: true,
          data
        });
      }
    } else{ 
      const videoInfo = new videoInfoModel(req.body);
      await videoInfo.save();
      res.status(201).json({
        success: true,
        videoInfo,
      });
    }
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController, videoController };