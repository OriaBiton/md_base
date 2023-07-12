import sendMail from "../services/mail";

export default defineEventHandler(async event => {
  const { name, mdEmail, fromEmail, phone, msg } = await readBody(event);
  await sendMail({
    to: { email: mdEmail },
    from: { name: 'אתר המועצה הדתית', email: mdEmail },
    template: 'contact',
    replyTo: { name, email: fromEmail },
    data: { name, email: fromEmail, phone, msg },
    subject: 'הודעה חדשה מאתר המועצה'
  });
  return true;
});