<template>
  <div class="block md:hidden bg-brand-blue fixed bottom-0 w-full z-30">
    <div class="container flex items-center justify-between">
      <NuxtLink active-class="bg-[#149CFD]" to="/" class="flex flex-col items-center gap-2 py-2 px-3">
        <img src="/img/icons/mobile/home.svg" alt="">
        <p class="font-medium text-white text-[10px]">Главная</p>
      </NuxtLink>
      <NuxtLink active-class="bg-[#149CFD]" to="/catalog" class="flex flex-col items-center gap-2 py-2 px-3">
        <img src="/img/icons/mobile/catalog.svg" alt="">
        <p class="font-medium text-white text-[10px]">Каталог</p>
      </NuxtLink>
      <NuxtLink  to="#" class="flex flex-col items-center gap-2 py-2 px-3">
        <img src="/img/icons/mobile/up.svg" alt="">
        <p class="font-medium text-white text-[10px]">Вверх</p>
      </NuxtLink>
      <NuxtLink active-class="bg-[#149CFD]"  to="/saved" class="flex flex-col items-center gap-2 py-2 px-3">
        <img src="/img/icons/mobile/saved.svg" alt="">
        <p class="font-medium text-white text-[10px]">Избранное</p>
      </NuxtLink>
      <NuxtLink to="#" class="flex flex-col items-center gap-2 py-2 px-3">
        <img src="/img/icons/mobile/exit.svg" alt="">
        <p class="font-medium text-white text-[10px]">Выход</p>
      </NuxtLink>
    </div>
  </div>
</template>