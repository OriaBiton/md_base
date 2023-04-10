export function phoneToRaw(phone: string) {
  return phone.replace(/-/g, '');
}