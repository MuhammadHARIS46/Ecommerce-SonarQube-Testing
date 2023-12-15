const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dcwahx7wk",
  api_key: "555991721558452",
  api_secret: "stQY2RWbot1jM_a0rLEg2YgHVKw",
});

const uploadToCloudinary = async (fileString, format) => {
  try {
    const { uploader } = cloudinary;

    const res = await uploader.upload(
      `data:image/${format};base64,${fileString}`
    );

    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

const DatauriParser = require("datauri/parser");

const parser = new DatauriParser();

const bufferToDataURI = async (fileFormat, buffer) =>
  await parser.format(fileFormat, buffer);

module.exports = {
  uploadToCloudinary,
  bufferToDataURI,
};
