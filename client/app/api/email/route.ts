import EmailTemplate from "@/Components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_SERVER_PASSWORD);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["kazisharifulislam52@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Kazi" }),
    });
    return Response.json(data);
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
}
