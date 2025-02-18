const FileManager = new (require("./file_manager"))();
const fs = require("fs");

const generateOtp = () => {
  const otp = Math.floor(100000 + Math.random() * 900000); // generates a random 6-digit OTP
  return otp;
};

async function getFileName(url) {
  return (test = url.split("/").pop());
}

async function unlinkRemoveFile(folderName, url) {
  let localPath = FileManager.resolvePath(folderName);
  let fileName = await getFileName(url);
  fs.unlink(localPath + fileName, function (err) {
    if (err) {
      return { data: err, status: false };
    } else {
      return { data: "err", status: true };
    }
  });
}

module.exports = { generateOtp, unlinkRemoveFile, getFileName };
