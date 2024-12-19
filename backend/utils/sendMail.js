import nodemailer from "nodemailer";
import { INFO_RECIEVED_EMAIL, WELCOME_EMAIL_TEMPLATE } from "./emailTemplate.js";
// import { PASSWORD_RESET_EMAIL_TEMPLATE } from "./emailTemplate.js"; // Example for another template

export const sendMail = async (email, name, type, message) => {
    // Create transporter (no need to recreate it for each email type)
    const transporter = nodemailer.createTransport({
        service: process.env.SMPT_SERVICE,
        port: 465,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASS,
        },
    });

    // Set default subject and body based on email type
    let subject = "";
    let htmlContent = "";

    switch (type) {
        case "welcome":
            subject = "Welcome to wellNest";
            htmlContent = WELCOME_EMAIL_TEMPLATE.replace("{userName}", name);
            break;
        case "info-recieved":
            subject = "Your Message Recieved";
            htmlContent = INFO_RECIEVED_EMAIL.replace("{userName}", name).replace("{message}", message);
            break;
        // Add more cases for other email types
        default:
            throw new Error("Unknown email type");
    }

    // Set mail options dynamically based on the email type
    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: email,
        subject: subject,
        html: htmlContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
};
