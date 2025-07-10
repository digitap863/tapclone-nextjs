import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const data = await req.json();

  // Validate required fields
  const required = [
    "firstName",
    "lastName",
    "email",
    "location",
    "position",
    "experience",
  ];
  for (const field of required) {
    if (!data[field]) {
      return NextResponse.json(
        { error: `${field} is required` },
        { status: 400 }
      );
    }
  }

  // Configure your SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Compose the email
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    subject: `New Career Application: ${data.position}`,
    text: `
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Location: ${data.location}
Position: ${data.position}
Experience: ${data.experience}
Current Salary: ${data.currentSalary}
Qualification: ${data.qualification}
Gender: ${data.gender}
    `,
    html: `
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Position:</strong> ${data.position}</p>
      <p><strong>Experience:</strong> ${data.experience}</p>
      <p><strong>Current Salary:</strong> ${data.currentSalary}</p>
      <p><strong>Qualification:</strong> ${data.qualification}</p>
      <p><strong>Gender:</strong> ${data.gender}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
