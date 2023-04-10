<template>
  <div class="wave-bottom">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      <defs>
        <linearGradient id="headerGradient" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0" stop-color="#C7EFFF" />
          <stop offset="1" stop-color="var(--bright)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
header .wave-bottom {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}
header .wave-bottom svg {
  position: relative;
  display: block;
  width: calc(138%);
  height: 150px;
}
header .wave-bottom .shape-fill {
  fill: url(#headerGradient);
}
</style>