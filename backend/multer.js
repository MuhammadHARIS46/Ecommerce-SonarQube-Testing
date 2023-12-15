const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const limits = {
  fileSize: 1024 * 1024 * 5, // Limit the file size to 5 MB
};

exports.upload = multer({ storage: storage, limits: limits });
