import { siteConfigInjectionKey } from "../assets/injection-keys";
import { WeeklyHours } from "../types";

const useIsOpenState = () => useState(() => false);

export default function useIsOpen() {
  const { openingHours } = inject(siteConfigInjectionKey)!;
  const isOpen = useIsOpenState();

  onMounted(() => {
    const { isHoliday } = useHebcal();
    isOpen.value = !isHoliday.value || checkIsOpen(openingHours);
  });

  return isOpen;
}

function checkIsOpen(hours: WeeklyHours): boolean {
  const now = new Date();
  const currentDay = now.getDay();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  const todayHours = hours[currentDay];
  if (!todayHours || !todayHours.length) return false;

  for (const [start, end] of todayHours) {
    if (!start || !end) return false;
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);
    const startTime = startHour * 60 + startMinute;
    const endTime = endHour * 60 + endMinute;
    if (currentTime >= startTime && currentTime <= endTime) {
      return true;
    }
  }
  return false;
}