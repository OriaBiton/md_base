export default defineNuxtPlugin(() => {
  const { G_TAG } = useAppConfig();
  useHead({
    script: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${G_TAG}`, async: true }
    ]
  });
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', G_TAG);
});