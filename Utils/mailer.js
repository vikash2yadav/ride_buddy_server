const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

class Mailer {
  async forgotPasswordEmail(data) {
    const mailOptions = {
      from: process.env.MAIL_EMAIL,
      to: data?.email,
      subject: "Reset Your Password",
    };

    if (data?.otp) {
      mailOptions.html = `
                <p>Hello ${data?.name || "Sir"},</p>
                <p>Your One-Time Password (OTP) for resetting your password is:</p>
                <h2>${data?.otp}</h2>
                <p>This OTP is valid for 2 minutes. Please do not share it with anyone.</p>
                <p>If you did not request this, please ignore this email.</p>
            `;
    } else {
      mailOptions.text = `
                Hello ${data?.name || "Sir"},
                \n\n
                To reset your password, please click on the link below:
                \n\n
                ${data?.forgot_link}${data?.access_token}
                \n\n
                If you did not request this, please ignore this email.
            `;
    }

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
    } catch (error) {
      console.log("Error sending email: ", error);
    }
  }
}

module.exports = Mailer;
