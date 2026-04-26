import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const { name, email, company, service, message } = validatedData;

    // Initialize Resend only when needed
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables");
      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    
    await resend.emails.send({
      from: "AspireAI Inquiry <no-reply@aspireaisolutions.com>",
      to: "contact@aspireaisolutions.com",
      subject: `New Inquiry: ${name} (${service}) - ${timestamp}`,
      reply_to: email,
      text: `
New Inquiry from AspireAI Website
--------------------------------
Time: ${timestamp}
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Service: ${service}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <h2 style="color: #0066ff; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Website Inquiry</h2>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #0066ff;">
            <strong>Time:</strong> ${timestamp}<br>
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Company:</strong> ${company || "N/A"}<br>
            <strong>Service:</strong> ${service}
          </p>
          <div style="margin-top: 20px;">
            <strong>Message:</strong><br>
            <p style="white-space: pre-wrap; background: #fff; border: 1px solid #eee; padding: 15px; border-radius: 8px;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">This email was sent from the contact form on aspireaisolutions.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
