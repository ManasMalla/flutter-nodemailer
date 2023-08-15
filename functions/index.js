const functions = require(`firebase-functions`);
const admin = require(`firebase-admin`);
const nodemailer = require(`nodemailer`);
const cors = require(`cors`)({origin: true });
admin.initializeApp();

exports.sendMail = functions.https.onRequest((req, res) => {
  const transporter = nodemailer.createTransport({
    host: `smtp.gmail.com`,
    port: 465,
    pool: true,
    secure: true,
    auth: {
      user: req.query.user,
      pass: req.query.password,
    },
  });
  cors(req, res, () => {
    // getting dest email by query string
    const dest = req.query.dest;
    const subject = req.query.subject;
    const html = req.query.html;
    const mailOptions = {
      from: req.query.user,
      to: dest,
      subject: subject,
      html: html,
    };
    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.status(404).send(erro.toString());
      }
      return res.status(200).send(`Sent`);
    });
  });
});
