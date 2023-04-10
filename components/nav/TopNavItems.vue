<template>
  <div class="flex" :class="{ wide }">
    <ul>
      <li class="nav-toggle" aria-label="פתיחת תפריט צד" @click="$emit('burgerClick')">
        <div class="nav-toggle-bar" />
      </li>
      <TopNavItemIsOpen :wide="wide" />
      <TopNavItemDate />
      <TopNavItemShabbat />
      <TopNavItemDropdown
        name="מחלקות המועצה"
        to="/#services"
        class="desktop"
        :menu="[
          { name: 'כשרות', to: '/kosher' },
          { name: 'נישואין', to: '/marriage' },
          { name: 'מקוואות', to: '/mikve' },
          { name: 'קבורה ואבלות', to: '/mourning' },
          { name: 'עירובין', to: '/eruvin' },
          { name: 'בתי כנסת', to: '/synagogues' },
          { name: 'העדה האתיופית', to: '/ethiopian' },
        ]"
      />
    </ul>
    <TopNavItemChannels class="desktop" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  wide: boolean;
}>();

defineEmits(['burgerClick']);
</script>

<style scoped>
.flex {
  --icon-size: 3.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
  transition: all .3s ease .3s;
}
.flex.wide {
  width: 85%;
}
ul{
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--secondary);
  font-size: unset;
  line-height: unset;
  gap: 3vw;
}
li{
  list-style: none;
  font-size: 17px;
  position: relative;
  transition: .5s;
}
li.link{
  transition: .7s .7s;  
}
.wide li.link{
  margin-left: 0;
  font-size: 0;
}

li a::before{
  transition: .3s ease-out;
  height: 5px;
  content: "";
  position: absolute;
  background-color: var(--primary);
  width: 0%;
  bottom: -1rem;
}
.wide li a::before{background-color: var(--highlight);}
li a:hover::before{width: 100%;}
.nav-toggle {
  user-select: none;
  cursor: pointer;
  height: 2rem;
  width: 2.6rem;
}
.nav-toggle:hover{opacity: .8}
.nav-toggle .nav-toggle-bar,
.nav-toggle .nav-toggle-bar::after,
.nav-toggle .nav-toggle-bar::before {
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease;
  background: var(--secondary);
  content: '';
  height: 0.4rem;
  width: 100%;
  position: absolute;
}
.nav-toggle .nav-toggle-bar { margin-top: 0; }
.nav-toggle .nav-toggle-bar::after { margin-top: 0.8rem; }
.nav-toggle .nav-toggle-bar::before { margin-top: -0.8rem; }

:deep(.nav-icon-couple){
  display: flex;
  align-items: center;  
}
:deep(.time-icon) {
  height: var(--icon-size);
  margin-left: 5px;
}

@media (max-width: 600px) {
  .flex, .flex.wide {
    width: 95%;
  }
  ul {
    margin: 0 auto;
    justify-content: space-between;
    width: 100%;
  }
  li {
    margin-left: 0;
    font-size: 1.4rem;
  }
  .desktop {
    display: none;
  }
}
</style>