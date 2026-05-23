import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, platform, budget, timeline, source, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY!;

    const payload = {
      service_id:  serviceId,
      template_id: templateId,
      user_id:     publicKey,
      accessToken: privateKey,
      template_params: {
        from_name:    name,
        from_email:   email,
        company:      company  || "—",
        phone:        phone    || "—",
        platform:     platform || "—",
        budget:       budget   || "—",
        timeline:     timeline || "—",
        source:       source   || "—",
        message,
        to_email:     "akibbhuiyan3544@gmail.com",
        reply_to:     email,
      },
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("EmailJS error:", text);
      return NextResponse.json({ error: "EmailJS failed." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
