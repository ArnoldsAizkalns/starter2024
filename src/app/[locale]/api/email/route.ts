import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
  const { email, name, message, phone } = await request.json()

  // Create a transporter for sending emails
  const transport = nodemailer.createTransport({
    service: 'gmail', // Setting service as 'gmail' is same as providing these settings:
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true
    auth: {
      user: process.env.MY_EMAIL, // Your email address for sending emails
      pass: process.env.MY_PASSWORD, // Your email password
    },
  })

  // Define email options
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL, // Адрес отправителя
    to: process.env.MY_EMAIL, // Адрес получателя
    // cc: email, // Раскомментируйте эту строку, если хотите отправить копию отправителю
    subject: `Message from ${name} (${email})`, // Тема письма
    html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #007bff;">New Message Received</h2>
      <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
      <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="">${message}</p>
    </div>
  `, // Текст письма
  }

  // Function to send email as a promise
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      // Send email
      transport.sendMail(mailOptions, function (err: any) {
        if (!err) {
          resolve('Email sent') // Resolve if email is sent successfully
        } else {
          reject(err.message) // Reject with error message if there's an error
        }
      })
    })

  try {
    await sendMailPromise() // Send email
    return NextResponse.json({ message: 'Email sent' }) // Return success message
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 }) // Return error message with status code 500
  }
}
