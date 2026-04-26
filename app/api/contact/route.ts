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
    
    await resend.emails.send({
      from: "AspireAI Web <no-reply@aspireaisolutions.com>",
      to: "contact@aspireaisolutions.com",
      subject: `New Inquiry from ${name} - ${service}`,
      reply_to: email,
      html: `
        <h2>New Inquiry from AspireAI Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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
