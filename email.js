const nodemailer = require("nodemailer");

//xwnu kzus mzji clrj

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "daffahaibanmuzakki@gmail.com",
    pass: "xwnu kzus mzji clrj",
  },
});


async function main() {
  
  const info = await transporter.sendMail({
    from: '"saya',
    to: "daffahaibanmuzakki@gmail.com", 
    subject: "Mas Mas", 
    text: "Hallo bro what'sup, berhasil", 
    
  });

  console.log("Message sent: %s", info.messageId);
 
}

main().catch(console.error);
