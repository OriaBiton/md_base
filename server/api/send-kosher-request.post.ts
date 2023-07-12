import sendMail from "../services/mail";

export default defineEventHandler(async event => {
  const { form, toEmail, mdEmail } = await readBody(event);
  await sendMail({
    to: {
      name: 'מחלקת כשרות',
      email: toEmail
    },
    from: {
      name: 'אתר המועצה הדתית',
      email: mdEmail
    },
    template: 'kosherRequest',
    data: {
      date: form.date,
      name: form.name,
      phone: form.phone,
      email: form.email,
      id: form.id,
      bizName: form.bizName,
      bizNum: form.bizNum,
      bizType: form.bizType,
      kitchen: form.kitchen,
      workdays: form.workdays,
      openHours: form.openHours,
      closeHours: form.closeHours,
      kosher: form.kosher,
      activity: form.activity,
      type: form.type,
      criteria: form.criteria,
      info: form.info,
      sign: form.sign
    }
  });
  return true;
});