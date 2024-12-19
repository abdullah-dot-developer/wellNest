export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to wellNest</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #5F77FF, #5F77FF); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Welcome to Our Community!</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello {userName},</p>
    <p>We're excited to welcome you to our platform! Thank you for joining us.</p>
    <p>At wellNest , we strive to provide the best experience possible, and we're thrilled to have you on board.</p>
    <p>Explore our features, connect with others, and make the most of what we have to offer. We're here to help you every step of the way.</p>
    <p>If you have any questions or need assistance, feel free to reach out to our support team at any time.</p>
    <p>Welcome once again! We can't wait to see what you'll accomplish with us.</p>
    <p style="font-weight: bold">Best regards,<br>wellNest team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const INFO_RECIEVED_EMAIL = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Query Recieved!</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #5F77FF, #5F77FF); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Thank you for contacting us!</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello {userName},</p>
    <p>We have recieved you message <b>{message}</b></p>
    <p>We will get back to you soon!</p>
    <p>Our Team will review you message and will respond to you.</p>
    <p>Thanks again for sending us a message.</p>
    <p> We can't wait to see what you'll accomplish with us.</p>
    <p style="font-weight: bold">Best regards,<br>wellNest team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

