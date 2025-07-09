import sgMail from "@sendgrid/mail";

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// Function to send email
export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    await sgMail.send({
      to,
      from: process.env.SERVER_EMAIL as string, //TODO Must be verified with SendGrid
      subject,
      html,
    });
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}