const mongoose = require("mongoose");
var videos = new mongoose.Schema({
  pauseTime: {
    type: String,
  },
  percentage: {
    type: String,
  },
});
//schema design
const videoInfoSchema = new mongoose.Schema(
  {
    video1: {
      type: videos,
    },
    video2: {
      type: videos,
    },
    video3: {
      type: videos,
    },
    email: {
      type: String,
    },
    completed: {
      type: String,
    }
  },
  { timestamps: true }
);

//export
const videoInfoModel = mongoose.model("videoInfo", videoInfoSchema);
module.exports = videoInfoModel;
