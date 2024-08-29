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
      <img src="/public/img/menu.png"  alt="">
    </div>
  </header>
</template>


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
</style>