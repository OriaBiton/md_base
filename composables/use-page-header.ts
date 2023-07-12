import { Image } from "../types";

const useHeader = () => useState(() => '');
const useImg = () => useState<Image>(() => ({
  src: '', alt: ''
}));

export default function usePageHeader() {
  const header = useHeader();
  const img = useImg();
  return {
    header, img,
    setHeader(text: string, image: Image) {
      header.value = text;
      img.value = image;
    }
  };
}