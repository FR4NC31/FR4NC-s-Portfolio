import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if ([name, email, subject, message].some((value) => typeof value !== "string" || !value.trim())) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const requiredConfig = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO_EMAIL"] as const;
    const invalidConfig: string[] = requiredConfig.filter((key) => {
      const value = process.env[key];
      return !value?.trim() || /^(?:your[-_ ]|replace[-_ ]|changeme$)/i.test(value);
    });
    const smtpPort = Number(process.env.SMTP_PORT);
    if ((!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) && !invalidConfig.includes("SMTP_PORT")) {
      invalidConfig.push("SMTP_PORT");
    }

    if (invalidConfig.length > 0) {
      console.error("Contact email configuration requires valid values for:", invalidConfig.join(", "));
      return NextResponse.json(
        { error: "Email delivery is not configured yet. Please reach out on LinkedIn." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr />

        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    const smtpError = error as { code?: string; command?: string; responseCode?: number };
    console.error("Contact email delivery failed:", {
      code: smtpError?.code ?? "UNKNOWN",
      command: smtpError?.command,
      responseCode: smtpError?.responseCode,
    });

    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
