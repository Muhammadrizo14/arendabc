<template>
  <NuxtLink :to="`/house/${1}`" class=" w-[200px] md:w-[288.72px]">
    <div class="card">
      <div class="card__image relative">
        <div class="card_rate flex justify-between items-center absolute p-1 px-2 w-full">
          <div class="flex gap-1">
            <div class="bg-brand-primary px-4 py-2 rounded-full">
              <p class="text-white text-sm">A+</p>
            </div>
            <div class="bg-brand-green px-4 py-2 rounded-full">
              <p class="text-white text-sm">Продажа</p>
            </div>
          </div>
          <img src="../public/img/favorites.png" alt="">
        </div>
        <img src="../public/img/card.png" class="w-full" alt="">
      </div>
      <div class="card__content bg-white p-3 border-b border-r border-l border-custom-gray rounded-b-xl md:border-none">
        <h3 class="pb-1 text-base font-bold">ОСЗ, 1 930 кв.м</h3>
        <p class="text-[#999] text-sm pb-1">Василеостровский р-он</p>
        <div class="flex items-center gap-2 pb-2">
          <img src="../public/img/object.png" alt="">
          <p class="text-brand-blue text-base font-semibold">122 000 кв.м.</p>
        </div>
        <p class="text-brand-green text-lg font-bold text-xl">1,500,000,000 ₽</p>
      </div>
    </div>
  </NuxtLink>
</template>