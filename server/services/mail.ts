import { EmailData } from '@sendgrid/helpers/classes/email-address';
import sgMail from '@sendgrid/mail';

const TEMPLATE_IDS = {
  contact: 'd-b249254d38ac4651afb93e1337f38dcd',
  kosherRequest: 'd-40c71a7fceb842eab2770558e830f979',
  marriageDocRequest: 'd-d6039949a14342509777e35451a2187e'
};

type Template = keyof typeof TEMPLATE_IDS;

interface MailData {
  to: EmailData;
  from: EmailData;
  replyTo?: EmailData;
  subject?: string;
  template: Template;
  data: object;
}

const API_KEY = useRuntimeConfig().sendgridKey;

sgMail.setApiKey(API_KEY);

export default async function sendMail(mail: MailData) {
  const { to, replyTo, from, subject, template, data } = mail;
  await sgMail.send({
    to, from,
    replyTo: replyTo || from,
    templateId: TEMPLATE_IDS[template],
    dynamicTemplateData: {
      subject,
      data
    }
  });
}