import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();
const connectors = new ReplitConnectors();

router.post("/enquiry", async (req, res) => {
  const { name, company, email, phone, material, message } = req.body as Record<string, string>;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and requirements are required." });
    return;
  }

  const bodyText =
    `Name: ${name}\n` +
    `Company: ${company || "N/A"}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone || "N/A"}\n` +
    `Material / Alloy: ${material || "Not specified"}\n\n` +
    `Requirements:\n${message}`;

  const htmlBody = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company || "N/A"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p><strong>Material / Alloy:</strong> ${material || "Not specified"}</p>
    <hr/>
    <p><strong>Requirements:</strong></p>
    <p style="white-space:pre-wrap">${message}</p>
  `;

  try {
    const response = await connectors.proxy("resend", "/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "BAR Trading Website <onboarding@resend.dev>",
        to: ["info@bartrading.co.uk"],
        reply_to: email,
        subject: `Website Enquiry – ${name}${company ? ` (${company})` : ""}`,
        text: bodyText,
        html: htmlBody,
      }),
    });

    const data = await response.json() as { id?: string; statusCode?: number; message?: string };

    if (!response.ok) {
      req.log.error({ data }, "Resend API error");
      res.status(502).json({ error: "Failed to send enquiry. Please email us directly at info@bartrading.co.uk" });
      return;
    }

    req.log.info({ id: data.id }, "Enquiry email sent");
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send enquiry email");
    res.status(500).json({ error: "Failed to send enquiry. Please email us directly at info@bartrading.co.uk" });
  }
});

export default router;
