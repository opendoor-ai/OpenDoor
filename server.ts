import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for sending emails
  app.post("/api/send-emails", async (req, res) => {
    const { company, name, phone, email, inquiry } = req.body;

    try {
      // 1. Configure Transporter
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // 2. Mail to Admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: `[오픈도어기계광고] 새로운 상담 신청 알림 - ${company}`,
        text: `
새로운 상담 신청 내역:
- 회사명: ${company}
- 성함: ${name}
- 연락처: ${phone}
- 이메일: ${email}
- 문의내용: ${inquiry}
        `,
      };

      // 3. Mail to Applicant (Confirmation)
      const applicantMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `[오픈도어기계광고] 상담 신청이 정상적으로 접수되었습니다.`,
        text: `
안녕하세요, ${name}님. 오픈도어기계광고입니다.
남겨주신 상담 신청이 정상적으로 접수되었습니다.

[신청 내역]
- 회사명: ${company}
- 문의내용: ${inquiry}

빠른 시일 내에 담당자가 연락드리겠습니다.
감사합니다.
        `,
      };

      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(applicantMailOptions)
        ]);
        console.log("Emails sent successfully");
      } else {
        console.warn("Email credentials missing in environment variables.");
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ success: false });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
