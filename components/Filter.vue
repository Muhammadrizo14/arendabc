<template>
  <div class="bg-white mt-3 border border-custom-gray rounded-lg container">
    <div class="category flex items-center p-4">
      <div class="w-[240px]">
        <p class="text-base">Категория</p>
      </div>
      <div class="flex items-center">
        <div @click="active_tab=0" :class="active_tab === 0 ? 'bg-brand-blue text-white' : 'text-brand-blue'" class="cursor-pointer  py-1 px-4  border border-brand-blue  rounded-l-lg">Все</div>
        <div @click="active_tab=1" :class="active_tab === 1 ? 'bg-brand-blue text-white' : 'text-brand-blue'" class="cursor-pointer px-2 text-brand-blue py-1 border border-brand-blue">Аренда</div>
        <div @click="active_tab=2" :class="active_tab === 2 ? 'bg-brand-blue text-white' : 'text-brand-blue'" class="cursor-pointer py-1 px-2 text-brand-blue border border-brand-blue rounded-r-lg">Продажа</div>
      </div>
    </div>
    <div class="category flex items-start p-4 bg-brand-bright ">
      <div class="w-[240px]">
        <p class="text-base">Тип</p>
      </div>
      <div class="flex items-center gap-2">
        <OfferCard class="w-[150px] w-[169px]" v-for="home in rent" :image="home.imageUrl" :title="home.title"/>
      </div>
    </div>
    <div class="category flex items-center p-4">
      <div class="w-[240px]">
        <p class="text-base">Цена</p>
      </div>
      <div class="flex items-center gap-2">
        <input type="number" placeholder="от" class="bg-brand-input p-2 rounded">
        <input type="number" placeholder="до" class="bg-brand-input p-2 rounded">
        <p class="text-brand-blue text-base">{всё/кв.м.}</p>
      </div>
    </div>
    <div class="category flex items-center p-4 bg-brand-bright ">
      <div class="w-[240px]">
        <p class="text-base">Площадь</p>
      </div>
      <div class="flex items-center gap-2">
        <input type="number" placeholder="от" class="bg-brand-input p-2 rounded">
        <input type="number" placeholder="до" class="bg-brand-input p-2 rounded">
        <p class="text-brand-blue text-base">кв.м.</p>
      </div>
    </div>
    <div class="category flex items-center p-4">
      <div class="w-[240px]">
        <p class="text-base">Произвольный текст</p>
      </div>
      <div class="flex items-center gap-2">
        <input type="text" placeholder="поиск" class="bg-brand-input p-2 rounded w-[304px]">
      </div>
    </div>
    <div class="w-full bg-brand-input h-px"></div>
    <div class="category flex items-center p-4">
      <div class="w-[240px]">
      </div>
      <div class="flex items-center gap-2">
        <AppButton class="sm:py-1 sm:px-5">
          Применить
        </AppButton>
        <AppButton class="sm:bg-brand-input sm:text-black sm:py-1 sm:px-5">
          Сбросить
        </AppButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import OfferCard from "./Offer/OfferCard";
import AppButton from "./AppButton";

const active_tab = ref(0)

const rent = ref([
  {
    "title": "Складские помещения",
    "imageUrl": "6.png"
  },
  {
    "title": "Земельные участки",
    "imageUrl": "3.png"
  },
  {
    "title": "Отдельно стоящее здание (ОСЗ)",
    "imageUrl": "1.png"
  },
  {
    "title": "Офисные помещения",
    "imageUrl": "4.png"
  },
  {
    "title": "Встроенные помещения",
    "imageUrl": "2.png"
  },

])
</script>