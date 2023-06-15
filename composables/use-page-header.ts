const useHeader = () => useState(() => '');
const useImg = () => useState(() => '');

export default function usePageHeader() {
  const header = useHeader();
  const img = useImg();
  return {
    header, img,
    setHeader(text: string, imgSrc: string) {
      header.value = text;
      img.value = imgSrc;
    }
  };
}