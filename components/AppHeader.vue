<template>
  <header class="flex items-center container  justify-between py-4 px-4">
    <NuxtLink to="/"><img src="/img/logo.png" class="w-36 sm:w-56" alt="logo"></NuxtLink>
    <ul class="items-center gap-5 hidden lg:flex">
      <li class="p-3">
        <NuxtLink to="sale" class="font-medium " active-class="active-link">Продажа</NuxtLink>
      </li>
      <li class="p-3">
        <NuxtLink to="rent" class="font-medium " active-class="active-link">Аренда</NuxtLink>
      </li>
      <li class="p-3">
        <NuxtLink to="catalog" class="font-medium " active-class="active-link">Каталог</NuxtLink>
      </li>
      <li class="p-3">
        <NuxtLink to="saved" class="font-medium " active-class="active-link">Избранное</NuxtLink>
      </li>
    </ul>
    <a href="tel:+7 (999) 999-99-99" class="text-brand-green font-bold sm:text-2xl text-base font-bold hidden lg:block">+7 (812) 987-73-31</a>

    <div class=" flex items-center gap-3 lg:hidden">
      <a href="tel:+7 (999) 999-99-99" class="text-brand-green font-bold sm:text-2xl text-base font-bold">+7 (812) 987-73-31</a>
      <img src="/public/img/favorites.png"  alt="">
      <img src="/public/img/menu.png" @click="menu=!menu" alt="">
    </div>
    <div class="mobile_menu block md:hidden bg-white border-r pl-3 fixed w-4/5 h-screen z-50 top-0 left-0" :class="menu ? 'translate-x-0' : '-translate-x-full'">
      <NuxtLink to="/"><img src="/img/logo.png" class="w-2/3 py-6" alt="logo"></NuxtLink>
      <ul class="flex flex-col gap-5">
        <li>
          <NuxtLink to="sale" class="font-medium " active-class="text-brand-blue">Продажа</NuxtLink>
        </li>
        <li>
          <NuxtLink to="rent" class="font-medium " active-class="text-brand-blue">Аренда</NuxtLink>
        </li>
        <li>
          <NuxtLink to="catalog" class="font-medium " active-class="text-brand-blue">Каталог</NuxtLink>
        </li>
        <li>
          <NuxtLink to="saved" class="font-medium " active-class="text-brand-blue">Избранное</NuxtLink>
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
  bottom: -33px;
}

.mobile_menu {
  transition: all 0.6s ease;
}

</style>