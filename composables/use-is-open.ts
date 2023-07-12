import { siteConfigInjectionKey } from "../assets/injection-keys";
import { WeeklyHours } from "../types";

const RESET_INTERVAL_MS = 60000;

const useIsOpenState = () => useState(() => false);

var resetInterval: NodeJS.Timer;

export default function useIsOpen() {
  const { openingHours } = inject(siteConfigInjectionKey)!;
  const { isHoliday } = useHebcal();
  const isOpen = useIsOpenState();

  onMounted(() => {
    if (resetInterval) {
      setIsOpen();
    } else {
      resetInterval = setInterval(setIsOpen, RESET_INTERVAL_MS);
    }
  });

  return isOpen;

  function setIsOpen() {
    isOpen.value = !isHoliday.value || checkIsOpen(openingHours);
  }
}

function checkIsOpen(hours: WeeklyHours) {
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