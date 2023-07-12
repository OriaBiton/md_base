import sendMail from "../services/mail";

export default defineEventHandler(async event => {
  const { form, mdEmail } = await readBody(event);
  await sendMail({
    to: {
      name: 'אוריה ביטון',
      email: 'oriabiton@gmail.com'
    },
    from: {
      name: 'אתר המועצה הדתית',
      email: mdEmail
    },
    template: 'marriageDocRequest',
    data: {
      name: form.name,
      date: form.date,
      phone: form.phone,
      doc: form.doc,
      husbandLastName: form.husbandLastName,
      husbandFirstName: form.husbandFirstName,
      husbandId: form.husbandId,
      wifeLastName: form.wifeLastName,
      wifeFirstName: form.wifeFirstName,
      wifeId: form.wifeId,
      wedDate: form.weddingDate,
      email: form.email
    }
  });
  return true;
});