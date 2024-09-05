<template>
  <NuxtLink :to="`/house/${1}`" class="w-auto md:w-[288px]">
    <div class="card">
      <div class="card__image relative">
        <div class="card_rate flex justify-between items-center absolute p-1 px-2 w-full">
          <div class="flex items-center gap-1">
            <div class="flex bg-brand-primary w-[23px] h-[22px] md:w-[27px] md:h-[26px] items-center justify-center rounded-full">
              <p class="text-white text-[8px] md:font-bold p-0 ">A+</p>
            </div>
            <div class="flex items-center justify-center bg-brand-green px-2 rounded-full h-[22px] md:h-[26px]">
              <p class="text-white text-[8px] md:font-bold p-0 ">Продажа</p>
            </div>
          </div>
          <img src="../public/img/favorites.png" alt="">
        </div>
        <img src="../public/img/card.png" class="w-full" alt="">
      </div>
      <div class="card__content bg-white p-3 border-b border-r border-l border-custom-gray rounded-b-xl md:border-none">
        <h3 class="pb-1 text-xs md:text-base font-bold">ОСЗ, 1 930 кв.м</h3>
        <p class="text-[#999] text-[8px] md:text-xs pb-2 md:font-medium ">Василеостровский р-он</p>
        <div class="flex items-center gap-2 pb-1">
          <img src="../public/img/object.png" alt="">
          <p class="text-brand-blue text-xs md:text-sm md:font-semibold">122 000 кв.м.</p>
        </div>
        <p class="text-brand-green font-extrabold text-sm md:font-bold md:text-xl ">1,500,000,000 ₽</p>
      </div>
    </div>
  </NuxtLink>
</template>