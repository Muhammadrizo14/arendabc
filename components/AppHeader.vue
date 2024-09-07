<template>
  <header class="flex items-center container justify-between py-1 bg-brand-bright md:bg-white py-5 md:py-1">
    <NuxtLink to="/"><img src="/img/logo.png" class="w-28 sm:w-56" alt="logo"></NuxtLink>
    <ul class="items-center gap-5 hidden lg:flex">
      <li class="p-3">
        <NuxtLink to="/sale" class="font-medium  text-brand-grey" active-class="active-link">Продажа</NuxtLink>
      </li>
      <li class="p-3">
        <NuxtLink to="/rent" class="font-medium  text-brand-grey" active-class="active-link">Аренда</NuxtLink>
      </li>
      <li class="p-3">
        <NuxtLink to="/catalog" class="font-medium  text-brand-grey" active-class="active-link">Каталог</NuxtLink>
      </li>
      <li class="p-3">
        <NuxtLink to="/saved" class="font-medium  text-brand-grey" active-class="active-link">Избранное</NuxtLink>
      </li>
    </ul>
    <a href="tel:+7 (999) 999-99-99" class="text-brand-green font-bold sm:text-2xl text-base font-bold hidden lg:block">+7
      (812) 987-73-31</a>

    <div class=" flex items-center gap-3 lg:hidden">
      <a href="tel:+7 (999) 999-99-99" class="text-brand-green font-medium text-sm font-bold">+7 (812) 987-73-31</a>
      <img src="/public/img/favorites.png" alt="">
      <img src="/public/img/menu.svg" @click="menu=!menu" alt="">
    </div>
    <div class="mobile_menu block md:hidden bg-white border-r pl-3 fixed w-4/5 h-screen z-50 top-0 left-0"
         :class="menu ? 'translate-x-0' : '-translate-x-full'">
      <div class="flex justify-between items-center pr-3 py-6">
        <NuxtLink @click="menu=false" to="/" class="w-2/3"><img src="/img/logo.png" class="f-full" alt="logo"></NuxtLink>

        <button class="close" @click="menu=false">
          <svg  width="20" height="20" viewBox="0 0 14 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1 13" stroke="#8F8F8F" stroke-opacity="0.79" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M1 1L13 13" stroke="#8F8F8F" stroke-opacity="0.79" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <ul class="flex flex-col gap-5">
        <li @click="menu=false">
          <NuxtLink to="/sale" class="font-medium text-brand-grey" active-class="text-brand-blue">Продажа</NuxtLink>
        </li>
        <li @click="menu=false">
          <NuxtLink to="/rent" class="font-medium text-brand-grey" active-class="text-brand-blue">Аренда</NuxtLink>
        </li>
        <li @click="menu=false">
          <NuxtLink to="/catalog" class="font-medium text-brand-grey" active-class="text-brand-blue">Каталог</NuxtLink>
        </li>
        <li @click="menu=false">
          <NuxtLink to="/saved" class="font-medium text-brand-grey" active-class="text-brand-blue">Избранное</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const menu = ref(false)
</script>

<style>
.active-link {
  position: relative;
  color: #00B6F4;
}

.active-link:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background: #00B6F4;
  bottom: -19px;
}

.mobile_menu {
  transition: all 0.6s ease;
}

.close {

}
</style>