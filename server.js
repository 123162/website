console.log("Email:", process.env.EMAIL_USER);
console.log("Şifre:", process.env.EMAIL_PASS);

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: "hedef-email@gmail.com", // Buraya kendi e-posta adresini yaz
    subject: `Yeni İletişim Formu Mesajı - ${name}`,
    text: `Ad: ${name}\nEmail: ${email}\nMesaj: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "E-posta başarıyla gönderildi!" });
  } catch (error) {
    res.status(500).json({ message: "E-posta gönderilirken hata oluştu!", error });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor...`));
