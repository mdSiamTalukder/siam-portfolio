import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const resend = new Resend(process.env.RESEND_API_KEY);

/* =====================================
   Allowed Origins
===================================== */

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5176",
  "http://localhost:5177",
  "http://localhost:4173",
  "https://siam-portfolio-cdnm.vercel.app",
];

/* =====================================
   Middleware
===================================== */

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an origin
      // Example: Postman, Thunder Client, server-to-server
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(express.json());

/* =====================================
   Health Check
===================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Siam Portfolio API is running",
  });
});

/* =====================================
   Contact Form
===================================== */

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    /* -------------------------------
       Validation
    -------------------------------- */

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    /* -------------------------------
       Send Email with Resend
    -------------------------------- */

    const { data, error } = await resend.emails.send({
      from: "Siam Portfolio <onboarding@resend.dev>",
      to: [process.env.RECEIVER_EMAIL],
      replyTo: email.trim(),
      subject: `New Portfolio Message from ${name.trim()}`,
      text: `
You received a new message from your portfolio website.

Name: ${name.trim()}

Email: ${email.trim()}

Message:

${message.trim()}
      `,
    });

    /* -------------------------------
       Resend Error
    -------------------------------- */

    if (error) {
      console.error("❌ Resend Error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to send email.",
      });
    }

    /* -------------------------------
       Success
    -------------------------------- */

    console.log("✅ Email sent successfully:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("❌ Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

/* =====================================
   Start Server
===================================== */

app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running on http://localhost:${PORT}`);
});
