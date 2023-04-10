const MINS_TO_SUNSET_AFTER_HADLAKA = 18;
const WEEK_DAYS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

const dayOfWeek = ref('');
const parasha = ref('');
const hadlaka = ref('');
const havdala = ref('');
const hebDate = ref('');
const isHoliday = ref(false);

const sunset = computed(() => {
  const [hours, mins] = hadlaka.value.split(':').map(parseInt);
  const date = new Date(1, 1, 2000, hours, mins);
  date.setMinutes(date.getMinutes() + MINS_TO_SUNSET_AFTER_HADLAKA);
  return `${date.getHours()}:${date.getMinutes()}`;
});

let isSet = false;
let geoName: number;

export default async function useHebcal() {
  geoName = (useAppConfig() as any).GEO_NAME;
  if (!isSet) await init();
  return { parasha, hadlaka, havdala, sunset, dayOfWeek, hebDate, isHoliday };
}

async function init() {
  isSet = true;
  await initHebDate();
  await initShabbat();
}

async function initHebDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  dayOfWeek.value = WEEK_DAYS[date.getDay()];
  const url = `https://www.hebcal.com/converter/?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`;
  const { hebrew } = await (await fetch(url)).json();
  hebDate.value = hebrew.replace(/[\u0591-\u05C7]/g, '');
}

async function initShabbat() {
  const url = `https://www.hebcal.com/shabbat/?cfg=json&geonameid=${geoName}&m=50`;
  const { items } = await (await fetch(url)).json();
  for (const item of items){
    if (item.category == 'parashat'){
      parasha.value = item.hebrew;
    }
    else {
      const time = extractHour(item?.date);
      if (item.category == 'candles'){
        hadlaka.value = time;
        isHoliday.value = true;
      }
      else if (item.category == 'havdalah'){
        havdala.value = time;    
        isHoliday.value = true;
      }
    }
  }
}