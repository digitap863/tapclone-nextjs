import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const phone = formData.get("phone");

  const html = `
  <div style="font-family: Arial, sans-serif;">
  <h1 style="color: #333; font-size: 24px;">Contact Us</h1>
  <table style="width: 100%; border-collapse: collapse; font-size: 18px;">
  <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
              </tr>
          <tr style="background-color: #f2f2f2;">
              <td style="padding: 10px; border: 1px solid #ddd;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${
                email ? message : null
              }</td>
              </tr>
              <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Phone</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr style="background-color: #f2f2f2;">
              <td style="padding: 10px; border: 1px solid #ddd;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${
                message ? message : null
              }</td>
              </tr>
      
      </table>
  </div>
`;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PWD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      to: "sales@luxurablinds.com",
      subject: `🚨 URGENT: Please Call ${name} ASAP 🚨`,
      html: html,
    };
    // Use promisify to convert the callback-based sendMail to a promise-based function
    const sendMailPromise = () => {
      return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });
    };

    await sendMailPromise();

    return NextResponse.json(
      {
        message: "Our team will contact you soon",
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
