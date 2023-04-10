const isOpen = ref(false);

export default function useIsOpen() {
  onMounted(async () => {
    const { isHoliday } = await useHebcal();
    isOpen.value = !isHoliday.value || checkIsOpen();
  });
  return isOpen;
};

function checkIsOpen() {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  if (day < 5 && hour >= 9 && hour < 18) {
    if (hour < 13) return true;
    if (hour > 16) {
      if (day == 1 || day == 3) return true;
    }
  }
  return false;
}