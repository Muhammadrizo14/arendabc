<template>
  <div>
    <offer class="py-6">
      <h3 class="text-white pb-6">ПРОДАЖА НЕДВИЖИМОСТИ РЯДОМ С МЕТРО {*}</h3>
      <div class="bar py-1 px-3 md:p-3 bg-white rounded-md flex items-center gap-3 ">
        <AppButton class="py-3" @click="filter=!filter">
          <p class="hidden sm:block">Фильтр</p>
          <svg class="block sm:hidden" width="12" height="13" viewBox="0 0 12 13" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.3333 0H0.666667C0.489856 0 0.320286 0.0720853 0.195262 0.200398C0.0702379 0.328711 0 0.50274 0 0.684202V2.20792L0.00533326 2.3605C0.0385388 2.81735 0.219709 3.24967 0.52 3.58864L3.33333 6.76402V12.3156C3.33331 12.424 3.35839 12.5309 3.4065 12.6274C3.45461 12.7239 3.52438 12.8073 3.61006 12.8708C3.69574 12.9342 3.79488 12.9758 3.8993 12.9922C4.00373 13.0085 4.11045 12.9992 4.21067 12.9649L8.21067 11.5965L8.28267 11.5671C8.39748 11.512 8.49458 11.4243 8.56259 11.3145C8.63061 11.2048 8.66671 11.0773 8.66667 10.9472V6.44108L11.414 3.62216C11.5999 3.43144 11.7473 3.20499 11.8479 2.95575C11.9484 2.7065 12.0001 2.43936 12 2.1696V0.684202C12 0.50274 11.9298 0.328711 11.8047 0.200398C11.6797 0.0720853 11.5101 0 11.3333 0Z"
                fill="white"/>
          </svg>
        </AppButton>
        <div class="flex items-center w-full">
          <input class="w-full py-3 outline-none h-full  text-2xl" type="text" placeholder="поиск" v-model="search">
          <svg @click="search=''" class="block sm:hidden" width="20" height="20" viewBox="0 0 14 14" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1 13" stroke="#8F8F8F" stroke-opacity="0.79" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M1 1L13 13" stroke="#8F8F8F" stroke-opacity="0.79" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
        <AppButton>
          <p class="text-base md:text-xl">Поиск</p>
        </AppButton>
      </div>
    </offer>
    <section class="stats bg-brand-bright">
      <div class="container flex items-start justify-between py-6 flex-col sm:flex-row sm:items-center">
        <h3>НАЙДЕНО <span>245 ОБЪЕКТОВ</span></h3>
        <div class="flex items-center">
          <div @click="activeTab = 0" :class="activeTab === 0 ? 'bg-brand-blue text-white' : 'bg-white text-black'" class="cursor-pointer p-1 px-4 rounded-l-lg">
            <p>Карточки</p>
          </div>
          <div @click="activeTab = 1" :class="activeTab === 1 ? 'bg-brand-blue text-white' : 'bg-white text-black'" class="cursor-pointer p-1 px-4">
            <p>Карта</p>
          </div>
          <div @click="activeTab = 2" :class="activeTab === 2 ? 'bg-brand-blue text-white' : 'bg-white text-black'" class="cursor-pointer p-1 px-4 rounded-r-lg">
            <p>Карта+Карточки</p>
          </div>
        </div>
      </div>
    </section>
    <section class="result bg-brand-bright pb-6">
      <div class="container">
        <div v-if="activeTab === 0" class="cards md:flex items-center gap-6 grid grid-cols-2 sm:grid-cols-3">
          <card/>
          <card/>
          <card/>
          <card/>
        </div>
        <div v-if="activeTab === 2" class="card__map flex items-stretch gap-6 flex-col lg:flex-row">
          <div class="grid grid-cols-2 w-5/5 md:grid-cols-2 lg:w-3/5 lg:grid-cols-2 gap-3 xl:w-1/2">
            <card/>
            <card/>
            <card/>
            <card/>
          </div>
          <div class="w-4/4 h-[600px] lg:h-auto xl:w-1/2">
            <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A50b6cc0bb34e455ec6a7168ecb8673b2c1e6aaace3d0d977bc840e6ecaaba705&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
          </div>
        </div>
        <div v-if="activeTab === 1" class="map">
          <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A50b6cc0bb34e455ec6a7168ecb8673b2c1e6aaace3d0d977bc840e6ecaaba705&amp;source=constructor" width="100%" height="639" frameborder="0"></iframe>
        </div>
      </div>

    </section>
  </div>
</template>
<script setup>
import Offer from "../../components/Offer/offer";
import Card from "../../components/card";
const activeTab = ref(1)
</script>