<template>
  <div>
    <offer class="md:py-6 max-[768px]:bg-none bg-brand-bright ">
      <h3 class="text-white pb-6 hidden md:block">ПРОДАЖА НЕДВИЖИМОСТИ РЯДОМ С МЕТРО {*}</h3>
      <div class="bg-brand-blue rounded-md">
        <div class="bar py-1 px-3 md:p-3 bg-white rounded-md flex items-center gap-3 ">
          <AppButton class="py-3" @click="filter=!filter">
            <p class="hidden sm:block">Фильтр</p>
            <svg class="block sm:hidden" v-if="filter===false" width="12" height="13" viewBox="0 0 12 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M11.3333 0H0.666667C0.489856 0 0.320286 0.0720853 0.195262 0.200398C0.0702379 0.328711 0 0.50274 0 0.684202V2.20792L0.00533326 2.3605C0.0385388 2.81735 0.219709 3.24967 0.52 3.58864L3.33333 6.76402V12.3156C3.33331 12.424 3.35839 12.5309 3.4065 12.6274C3.45461 12.7239 3.52438 12.8073 3.61006 12.8708C3.69574 12.9342 3.79488 12.9758 3.8993 12.9922C4.00373 13.0085 4.11045 12.9992 4.21067 12.9649L8.21067 11.5965L8.28267 11.5671C8.39748 11.512 8.49458 11.4243 8.56259 11.3145C8.63061 11.2048 8.66671 11.0773 8.66667 10.9472V6.44108L11.414 3.62216C11.5999 3.43144 11.7473 3.20499 11.8479 2.95575C11.9484 2.7065 12.0001 2.43936 12 2.1696V0.684202C12 0.50274 11.9298 0.328711 11.8047 0.200398C11.6797 0.0720853 11.5101 0 11.3333 0Z"
                  fill="white"/>
            </svg>
            <svg class="block sm:hidden" width="13" height="13" v-else viewBox="0 0 12 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1 13" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1L13 13" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </AppButton>
          <div class="flex items-center w-full">
            <input class="w-full py-3 outline-none h-full md:text-2xl text-center" type="text" placeholder="поиск"
                   v-model="search">
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
        <div class="py-1 px-3 flex items-center gap-3 md:hidden">
          <AppButton class="py-3 border">
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M11.3333 0H0.666667C0.489856 0 0.320286 0.0720853 0.195262 0.200398C0.0702379 0.328711 0 0.50274 0 0.684202V2.20792L0.00533326 2.3605C0.0385388 2.81735 0.219709 3.24967 0.52 3.58864L3.33333 6.76402V12.3156C3.33331 12.424 3.35839 12.5309 3.4065 12.6274C3.45461 12.7239 3.52438 12.8073 3.61006 12.8708C3.69574 12.9342 3.79488 12.9758 3.8993 12.9922C4.00373 13.0085 4.11045 12.9992 4.21067 12.9649L8.21067 11.5965L8.28267 11.5671C8.39748 11.512 8.49458 11.4243 8.56259 11.3145C8.63061 11.2048 8.66671 11.0773 8.66667 10.9472V6.44108L11.414 3.62216C11.5999 3.43144 11.7473 3.20499 11.8479 2.95575C11.9484 2.7065 12.0001 2.43936 12 2.1696V0.684202C12 0.50274 11.9298 0.328711 11.8047 0.200398C11.6797 0.0720853 11.5101 0 11.3333 0Z"
                  fill="white"/>
            </svg>
          </AppButton>
          <p class="text-white text-xs">ОСЗ, ОФИС, от 20-78 кв.м, в Адмиралтейском или Василеостровском р-оне, рядом с
            метро Адмиралтейское, по цене от 1500 руб. за кв.м </p>
        </div>
      </div>

      <!--pb-20 чтобы фильтр не съехал на навигацию-->
      <div class="relative z-20">
        <Filter v-if="filter" class="absolute" :class="filter === true && 'pb-20 md:pb-0'" @updateFilter="filter = false"/>
      </div>

    </offer>

    <section class="stats bg-brand-bright">
      <div class="container flex items-center justify-between py-2">
        <h3 class="text-[13px] md:text-xl">НАЙДЕНО <span>245 ОБЪЕКТОВ</span></h3>
        <div class="items-center py-3 md:py-0 w-full md:w-auto hidden md:flex">
          <div @click="activeTab = 0" :class="activeTab === 0 ? 'bg-[#53B3F8] text-white' : 'bg-white text-black'"
               class="cursor-pointer p-1.5 px-4 rounded-l-lg w-full text-center md:w-auto">
            <p class="text-sm md:text-lg">Карточки</p>
          </div>
          <div @click="activeTab = 1" :class="activeTab === 1 ? 'bg-[#53B3F8] text-white' : 'bg-white text-black'"
               class="cursor-pointer p-1.5 px-4 w-full text-center md:w-auto">
            <p class="text-sm md:text-lg">Карта</p>
          </div>
          <div @click="activeTab = 2" :class="activeTab === 2 ? 'bg-[#53B3F8] text-white' : 'bg-white text-black'"
               class="cursor-pointer p-1.5 px-4 rounded-r-lg w-full text-center md:w-auto">
            <p class="text-sm md:text-lg">Карта+Карточки</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <multiselect class="light" :class="activeTab === 1 && '!hidden md:!block'" v-model="value" :options="options" :allowEmpty="false" :searchable="false"
                       :show-labels="false" :preselectFirst="true"
                       placeholder="Сортировка"></multiselect>
          <button @click="activeTab === 1 ? activeTab = 0 : activeTab = 1" class="bg-white p-2 rounded-lg block md:hidden">
            <svg v-if="activeTab === 0" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.6566 2.31627C15.1253 3.76798 15.9653 5.72745 15.9989 7.78033C16.0326 9.83321 15.2573 11.8186 13.837 13.3166L13.6566 13.5011L9.88513 17.2285C9.40658 17.7013 8.76415 17.9765 8.08797 17.9986C7.4118 18.0206 6.75243 17.7877 6.24344 17.3471L6.11545 17.2285L2.3431 13.5002C0.842838 12.0171 0 10.0056 0 7.90825C0 5.81085 0.842838 3.79936 2.3431 2.31627C3.84336 0.833188 5.87815 0 7.99984 0C10.1215 0 12.1563 0.833188 13.6566 2.31627ZM7.99984 5.27218C7.64966 5.27218 7.3029 5.34037 6.97938 5.47284C6.65585 5.60532 6.36189 5.79949 6.11427 6.04427C5.86665 6.28905 5.67023 6.57965 5.53623 6.89947C5.40222 7.21929 5.33324 7.56208 5.33324 7.90825C5.33324 8.25442 5.40222 8.59721 5.53623 8.91703C5.67023 9.23685 5.86665 9.52745 6.11427 9.77223C6.36189 10.017 6.65585 10.2112 6.97938 10.3437C7.3029 10.4761 7.64966 10.5443 7.99984 10.5443C8.70707 10.5443 9.38533 10.2666 9.88541 9.77223C10.3855 9.27787 10.6664 8.60738 10.6664 7.90825C10.6664 7.20912 10.3855 6.53863 9.88541 6.04427C9.38533 5.54991 8.70707 5.27218 7.99984 5.27218Z" fill="#53B3F8"/>
            </svg>
            <svg  v-if="activeTab === 1" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.13189 0H1.08162C0.814182 0 0.557697 0.0888949 0.368589 0.247129C0.179482 0.405363 0.0732422 0.619974 0.0732422 0.843751V5.90626C0.0732422 6.13003 0.179482 6.34465 0.368589 6.50288C0.557697 6.66111 0.814182 6.75001 1.08162 6.75001H7.13189C7.39933 6.75001 7.65582 6.66111 7.84492 6.50288C8.03403 6.34465 8.14027 6.13003 8.14027 5.90626V0.843751C8.14027 0.619974 8.03403 0.405363 7.84492 0.247129C7.65582 0.0888949 7.39933 0 7.13189 0Z" fill="#53B3F8"/>
              <path d="M16.9918 0H10.9415C10.674 0 10.4176 0.0888949 10.2285 0.247129C10.0393 0.405363 9.93311 0.619974 9.93311 0.843751V5.90626C9.93311 6.13003 10.0393 6.34465 10.2285 6.50288C10.4176 6.66111 10.674 6.75001 10.9415 6.75001H16.9918C17.2592 6.75001 17.5157 6.66111 17.7048 6.50288C17.8939 6.34465 18.0001 6.13003 18.0001 5.90626V0.843751C18.0001 0.619974 17.8939 0.405363 17.7048 0.247129C17.5157 0.0888949 17.2592 0 16.9918 0Z" fill="#53B3F8"/>
              <path d="M7.13189 8.25H1.08162C0.814182 8.25 0.557697 8.3389 0.368589 8.49713C0.179482 8.65536 0.0732422 8.86997 0.0732422 9.09375V14.1563C0.0732422 14.38 0.179482 14.5946 0.368589 14.7529C0.557697 14.9111 0.814182 15 1.08162 15H7.13189C7.39933 15 7.65582 14.9111 7.84492 14.7529C8.03403 14.5946 8.14027 14.38 8.14027 14.1563V9.09375C8.14027 8.86997 8.03403 8.65536 7.84492 8.49713C7.65582 8.3389 7.39933 8.25 7.13189 8.25Z" fill="#53B3F8"/>
              <path d="M16.9918 8.25H10.9415C10.674 8.25 10.4176 8.3389 10.2285 8.49713C10.0393 8.65536 9.93311 8.86997 9.93311 9.09375V14.1563C9.93311 14.38 10.0393 14.5946 10.2285 14.7529C10.4176 14.9111 10.674 15 10.9415 15H16.9918C17.2592 15 17.5157 14.9111 17.7048 14.7529C17.8939 14.5946 18.0001 14.38 18.0001 14.1563V9.09375C18.0001 8.86997 17.8939 8.65536 17.7048 8.49713C17.5157 8.3389 17.2592 8.25 16.9918 8.25Z" fill="#53B3F8"/>
            </svg>

          </button>
        </div>
      </div>
    </section>
    <section class="result bg-brand-bright md:pb-6">
      <div class="container">
        <div v-if="activeTab === 0"
             class="cards md:grid md:grid-cols-4 items-center gap-2 grid grid-cols-2 sm:grid-cols-3">
          <card/>
          <card/>
          <card/>
          <card/>
        </div>
        <div v-if="activeTab === 2" class="card__map flex items-stretch gap-6 flex-col lg:flex-row">
          <div class="grid grid-cols-2 w-5/5 md:grid-cols-2 lg:w-3/5 lg:grid-cols-2 gap-2 xl:w-1/2">
            <card/>
            <card/>
            <card/>
            <card/>
          </div>
          <div class="w-4/4 h-[600px] lg:h-auto xl:w-1/2">
            <iframe
                src="https://yandex.com/map-widget/v1/?um=constructor%3A50b6cc0bb34e455ec6a7168ecb8673b2c1e6aaace3d0d977bc840e6ecaaba705&amp;source=constructor"
                width="100%" height="100%" frameborder="0"></iframe>
          </div>
        </div>
        <div v-if="activeTab === 1" class="map">
          <iframe
              src="https://yandex.com/map-widget/v1/?um=constructor%3A50b6cc0bb34e455ec6a7168ecb8673b2c1e6aaace3d0d977bc840e6ecaaba705&amp;source=constructor"
              width="100%" height="639" frameborder="0"></iframe>
        </div>
      </div>

    </section>
  </div>
</template>
<script setup>
import Offer from "../../components/Offer/offer";
import Card from "../../components/card";
import Multiselect from 'vue-multiselect'

const activeTab = ref(0)
const filter = ref(false)
const search = ref('')
const options = ref(['Сначала недорогие', 'Сначала дорогие', 'Сначала новые',])
const value = ref(options[0])

</script>


<style lang="scss">

</style>