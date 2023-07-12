import { WEEK_DAY_NAMES } from "../assets/constants";
import { siteConfigInjectionKey } from "../assets/injection-keys";

const MINS_TO_SUNSET_AFTER_HADLAKA = 18;

const useDayOfWeek = () => useState(() => '');
const useParasha = () => useState(() => '');
const useHadlaka = () => useState(() => '');
const useHavdala = () => useState(() => '');
const useHebDate = () => useState(() => '');
const useIsHoliday = () => useState(() => false);

const sunset = computed(() => {
  const [hours, mins] = useHadlaka().value.split(':').map(parseInt);
  const date = new Date(1, 1, 2000, hours, mins);
  date.setMinutes(date.getMinutes() + MINS_TO_SUNSET_AFTER_HADLAKA);
  return `${date.getHours()}:${date.getMinutes()}`;
});

export default function useHebcal() {
  const parasha = useParasha();
  const hadlaka = useHadlaka();
  const havdala = useHavdala();
  const dayOfWeek = useDayOfWeek();
  const hebDate = useHebDate();
  const isHoliday = useIsHoliday();
  const { geoName } = inject(siteConfigInjectionKey)!.location;
  init(geoName);
  return {
    parasha, hadlaka, havdala, sunset, dayOfWeek, hebDate, isHoliday,
    reset() {
      init(geoName);
    }
  };

  function init(geoName: number) {
    initHebDate();
    initShabbat(geoName);
  }

  async function initHebDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    dayOfWeek.value = WEEK_DAY_NAMES[date.getDay()];
    const url = `https://www.hebcal.com/converter/?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`;
    const { data } = await useFetch<any>(url);
    hebDate.value = data.value.hebrew.replace(/[\u0591-\u05C7]/g, '');
  }

  async function initShabbat(geoName: number) {
    const url = `https://www.hebcal.com/shabbat/?cfg=json&geonameid=${geoName}&m=50`;
    const { data } = await useFetch<any>(url);
    for (const item of data.value.items){
      if (item.category == 'parashat'){
        parasha.value = item.hebrew;
      } else {
        const time = extractHour(item?.date);
        if (item.category == 'candles'){
          hadlaka.value = time;
          isHoliday.value = true;
        } else if (item.category == 'havdalah'){
          havdala.value = time;    
          isHoliday.value = true;
        }
      }
    }
  }
}