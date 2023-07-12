export function phoneToRaw(phone: string) {
  return phone.replace(/-/g, '');
}

export function buildWhatsappUrl(number: string) {
  return `https://wa.me/${number}`;
}