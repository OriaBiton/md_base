const header = ref('');
const img = ref('');

export default function usePageHeader() {
  return {
    header, img,
    setHeader(text: string, imgSrc: string) {
      header.value = text;
      img.value = imgSrc;
    }
  };
}