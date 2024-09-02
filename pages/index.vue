<template>
  <div class="bg-brand-bright">
    <offer class="bg-none md:bg-[url('public/img/offer.png')]">
      <div class="offer__container py-16">
        <div class="bar py-1 px-3 md:p-3 bg-white rounded-md flex items-center gap-3 ">
          <AppButton class="py-3" @click="filter=!filter">
            <p class="hidden sm:block">Фильтр</p>
            <svg class="block sm:hidden" v-if="filter===false" width="12" height="13" viewBox="0 0 12 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M11.3333 0H0.666667C0.489856 0 0.320286 0.0720853 0.195262 0.200398C0.0702379 0.328711 0 0.50274 0 0.684202V2.20792L0.00533326 2.3605C0.0385388 2.81735 0.219709 3.24967 0.52 3.58864L3.33333 6.76402V12.3156C3.33331 12.424 3.35839 12.5309 3.4065 12.6274C3.45461 12.7239 3.52438 12.8073 3.61006 12.8708C3.69574 12.9342 3.79488 12.9758 3.8993 12.9922C4.00373 13.0085 4.11045 12.9992 4.21067 12.9649L8.21067 11.5965L8.28267 11.5671C8.39748 11.512 8.49458 11.4243 8.56259 11.3145C8.63061 11.2048 8.66671 11.0773 8.66667 10.9472V6.44108L11.414 3.62216C11.5999 3.43144 11.7473 3.20499 11.8479 2.95575C11.9484 2.7065 12.0001 2.43936 12 2.1696V0.684202C12 0.50274 11.9298 0.328711 11.8047 0.200398C11.6797 0.0720853 11.5101 0 11.3333 0Z"
                  fill="white"/>
            </svg>
            <svg class="block sm:hidden" width="13" height="13"  v-else viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1 13" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1L13 13" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </AppButton>
          <div class="flex items-center w-full">
            <input class="w-full py-3 outline-none h-full text-base md:text-2xl" type="text" placeholder="поиск" v-model="search">
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
        <div class="relative z-20">
          <Filter v-if="filter" class="absolute" @updateFilter="filter = false"/>
        </div>
        <div
            class="bg-white mt-3 py-2 p-2 md:p-0 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg">
          <div class="flex items-center justify-between pl-2 pb-3">
            <h3 class="text-black text-base md:text-white">ПРОДАЖА</h3>
            <AppButton class="py-1  block md:hidden">
              <div class="flex items-center gap-3">
                <p>Показать всё</p>
                <img src="/img/icons/arrowright.png" alt="">
              </div>
            </AppButton>
          </div>
          <swiper
              :slidesPerView="6"
              :spaceBetween="30"
              :modules="modules"
              class="mySwiper"
              :breakpoints="{
                '100': {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                          '420': {
                  slidesPerView: 2.1,
                  spaceBetween: 10,
                },
                          '500': {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                '600': {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                '804': {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                '980': {
                  slidesPerView: 5,
                  spaceBetween: 25,
                },
                '1240': {
                  slidesPerView: 6,
                  spaceBetween: 25,
                },
              }"
          >
            <swiper-slide v-for="home in sell">
              <OfferCard :title="home.title" :image="home.imageUrl"/>
            </swiper-slide>
          </swiper>
        </div>
        <div
            class="bg-white mt-3 p-2 md:p-0 py-2  pl-2 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg">
          <div class="flex items-center justify-between pb-3">
            <h3 class="text-black text-base md:text-white">АРЕНДА</h3>
            <AppButton class="py-1  block md:hidden">
              <div class="flex items-center gap-3">
                <p>Показать всё</p>
                <img src="/img/icons/arrowright.png" alt="">
              </div>
            </AppButton>
          </div>
          <swiper
              :slidesPerView="6"
              :spaceBetween="30"
              :modules="modules"
              class="mySwiper"
              :breakpoints="{
                '100': {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
                '420': {
        slidesPerView: 2.1,
        spaceBetween: 10,
      },
                '500': {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      '600': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '804': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '980': {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      '1240': {
        slidesPerView: 6,
        spaceBetween: 25,
      },
    }"
          >
            <swiper-slide v-for="home in rent">
              <OfferCard :title="home.title" :image="home.imageUrl"/>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </offer>
    <section class="location container py-3 md:py-6 md:bg-[url('img/map.png')] bg-cover bg-no-repeat">
      <div
          class="metro bg-white mt-3 p-2 md:p-0 py-2 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg">
        <h3 class="pb-3 text-base">РЯДОМ С <span>МЕТРО</span></h3>
        <div class="columns-3 items-start pb-3 hidden md:block ">
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit" href="#">Автово</a>
            <a class="text-sm w-fit" href="#">Адмиралтейская</a>
            <a class="text-sm w-fit" href="#">Академическая</a>
            <a class="text-sm w-fit" href="#">Балтийская</a>
            <a class="text-sm w-fit" href="#">Бухарестская</a>
            <a class="text-sm w-fit" href="#">Василеостровская</a>
            <a class="text-sm w-fit" href="#">Владимирская</a>
            <a class="text-sm w-fit" href="#">Волковская</a>
            <a class="text-sm w-fit" href="#">Выборгская</a>
            <a class="text-sm w-fit" href="#">Горьковская</a>
            <a class="text-sm w-fit" href="#">Гостиный двор</a>
            <a class="text-sm w-fit" href="#">Гражданский проспект</a>
            <a class="text-sm w-fit" href="#">Достоевская</a>
            <a class="text-sm w-fit" href="#">Елизаровская</a>
            <a class="text-sm w-fit" href="#">Звёздная</a>
            <a class="text-sm w-fit" href="#">Звенигородская</a>
            <a class="text-sm w-fit" href="#">Кировский завод</a>
            <a class="text-sm w-fit" href="#">Комендантский проспект</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit" href="#">Ломоносовская</a>
            <a class="text-sm w-fit" href="#">Маяковская</a>
            <a class="text-sm w-fit" href="#">Международная</a>
            <a class="text-sm w-fit" href="#">Московская</a>
            <a class="text-sm w-fit" href="#">Московские ворота</a>
            <a class="text-sm w-fit" href="#">Нарвская</a>
            <a class="text-sm w-fit" href="#">Невский проспект</a>
            <a class="text-sm w-fit" href="#">Новочеркасская</a>
            <a class="text-sm w-fit" href="#">Обводный канал</a>
            <a class="text-sm w-fit" href="#">Обухово</a>
            <a class="text-sm w-fit" href="#">Озерки</a>
            <a class="text-sm w-fit" href="#">Парк Победы</a>
            <a class="text-sm w-fit" href="#">Парнас</a>
            <a class="text-sm w-fit" href="#">Петроградская</a>
            <a class="text-sm w-fit" href="#">Пионерская</a>
            <a class="text-sm w-fit" href="#">Площадь Александра Невского</a>
            <a class="text-sm w-fit" href="#">Площадь Восстания</a>
            <a class="text-sm w-fit" href="#">Площадь Ленина</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit" href="#">Проспект Просвещения</a>
            <a class="text-sm w-fit" href="#">Проспект Славы</a>
            <a class="text-sm w-fit" href="#">Пушкинская</a>
            <a class="text-sm w-fit" href="#">Садовая</a>
            <a class="text-sm w-fit" href="#">Сенная площадь</a>
            <a class="text-sm w-fit" href="#">Спасская</a>
            <a class="text-sm w-fit" href="#">Спортивная</a>
            <a class="text-sm w-fit" href="#">Старая деревня</a>
            <a class="text-sm w-fit" href="#">Технологический институт</a>
            <a class="text-sm w-fit" href="#">Удельная</a>
            <a class="text-sm w-fit" href="#">Фрунзенская</a>
            <a class="text-sm w-fit" href="#">Чёрная речка</a>
            <a class="text-sm w-fit" href="#">Чернышевская</a>
            <a class="text-sm w-fit" href="#">Чкаловская</a>
            <a class="text-sm w-fit" href="#">Электросила</a>
            <a class="text-sm w-fit" href="#">Автово</a>
            <a class="text-sm w-fit" href="#">Адмиралтейская</a>
            <a class="text-sm w-fit" href="#">Академическая</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit" href="#">Крестовский остров</a>
            <a class="text-sm w-fit" href="#">Купчино</a>
            <a class="text-sm w-fit" href="#">Ладожская</a>
            <a class="text-sm w-fit" href="#">Ленинский проспект</a>
            <a class="text-sm w-fit" href="#">Лесная</a>
            <a class="text-sm w-fit" href="#">Лиговский проспект</a>
            <a class="text-sm w-fit" href="#">Горьковская</a>
            <a class="text-sm w-fit" href="#">Гостиный двор</a>
            <a class="text-sm w-fit" href="#">Гражданский проспект</a>
            <a class="text-sm w-fit" href="#">Площадь Мужества</a>
            <a class="text-sm w-fit" href="#">Политехническая</a>
            <a class="text-sm w-fit" href="#">Приморская</a>
            <a class="text-sm w-fit" href="#">Пролетарская</a>
            <a class="text-sm w-fit" href="#">Проспект Большевиков</a>
            <a class="text-sm w-fit" href="#">Проспект Ветеранов</a>
            <a class="text-sm w-fit" href="#">Достоевская</a>
            <a class="text-sm w-fit" href="#">Елизаровская</a>
            <a class="text-sm w-fit" href="#">Звёздная</a>
          </div>
        </div>
        <div class="flex items-center gap-2 bg-brand-bright px-3 py-2 rounded-xl  block md:hidden">
          <input type="text" placeholder="поиск" class="w-full outline-none bg-transparent" v-model="metro">
          <img src="/img/icons/close.svg" alt="" @click="metro=''">
          <AppButton class="py-px.5 px-2">
            Найти
          </AppButton>
        </div>
      </div>

      <div
          class="near bg-white mt-3 p-2 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg">
        <h3 class="pb-3 text-base">В ВАШЕМ <span>РАЙОНЕ</span></h3>
        <div class="columns-3 items-start pb-3  hidden md:block ">
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit" href="#">Адмиралтейский</a>
            <a class="text-sm w-fit" href="#">Василеостровский</a>
            <a class="text-sm w-fit" href="#">Выборгский</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit" href="#">Калининский</a>
            <a class="text-sm w-fit" href="#">Кировский</a>
            <a class="text-sm w-fit" href="#">Красногвардейский</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit" href="#">Красносельский</a>
            <a class="text-sm w-fit" href="#">Московский</a>
            <a class="text-sm w-fit" href="#">Невский</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit" href="#">Петроградский</a>
            <a class="text-sm w-fit" href="#">Приморский</a>
            <a class="text-sm w-fit" href="#">Пушкинский</a>
          </div>
        </div>
        <div class="flex items-center gap-2 bg-brand-bright px-3 py-2 rounded-xl block md:hidden">
          <input type="text" placeholder="поиск" class="w-full outline-none bg-transparent" v-model="area">
          <img src="/img/icons/close.svg" alt="" @click="area=''">
          <AppButton class="py-px.5 px-2">
            Найти
          </AppButton>
        </div>
      </div>
    </section>

    <section class="about sm:bg-white py-3 md:py-10">
      <div class="container rounded flex items-center gap-6">
        <img class="hidden lg:block" src="../public/img/about.png" alt="">
        <div
            class="mt-3 p-2 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg bg-(url('public/img/offer.png')) bg-cover bg-white">
          <h2 class="pb-3 text-brand-grey text-3xl text-xl md:text-3xl">Аренда коммерческой недвижимости на <span>ARENDA</span><span
              class="text-brand-green">BC</span></h2>
          <p class="pb-4 text-brand-grey">
            Большинство частных предпринимателей в какой-то момент своей деятельности сталкиваются с необходимостью
            разместить свое дело в одном месте. И не имеет значения, связано это с потребностью обслуживать клиентов или
            просто более эффективно организовать рабочий процесс.
          </p>
          <p class="pb-4 text-brand-grey hidden md:block ">Разумеется, далеко не всегда предприниматель в состоянии
            купить коммерческую
            недвижимость, особенно в
            начале своей деятельности. Отличным решением станет аренда, которая в нашей стране пользуется огромной
            популярностью.</p>
          <p class="pb-4 text-brand-grey hidden md:block"> На сегодняшний день коммерческая недвижимость в
            Санкт-Петербурге, Москве или
            любом другом городе России
            позволяет быстро решить возникшую проблему. Существует действительно большое количество бизнес-центров, где
            любой желающий может выбрать офис под свои потребности.
          </p>
        </div>
      </div>
    </section>

    <section class="container">
      <div
          class=" bg-white mt-3 p-2 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg bg-(url('/img/aboutbg.png'))">
        <div class="flex items-center justify-between pb-3">
          <h3 class="text-brand-grey md:text-2xl font-extrabold text-xl">НОВЫЕ ОБЪЕКТЫ</h3>
          <AppButton class="hidden md:block">
            <p class="text-base">Добавить объект</p>
          </AppButton>
          <AppButton class="block md:hidden py-1 px-2">
            <div class="flex items-center gap-2">
              <p class="text-sm">Показать всё</p>
              <img src="/img/icons/arrowright.png" alt="">
            </div>
          </AppButton>
        </div>

        <swiper
            :slidesPerView="6"
            :spaceBetween="30"
            :modules="modules"
            class="mySwiper"
            :breakpoints="{
                '100': {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                '451': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '550': {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                '886': {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                '1240': {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }"
        >
          <swiper-slide v-for="home in new Array(4).fill(null)">
            <card/>
          </swiper-slide>
        </swiper>

      </div>
    </section>

  </div>
</template>


<script setup lang="ts">
import Offer from "../components/Offer/offer.vue";
import AppButton from "../components/AppButton.vue";
import OfferCard from "../components/Offer/OfferCard.vue";
import Card from "../components/card.vue";
import Filter from "../components/Filter.vue";


import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import {FreeMode} from 'swiper/modules';

const modules = ref([FreeMode])
const search = ref('')
const metro = ref('')
const area = ref('')

const filter = ref(false)

const sell = ref([
  {
    "title": "Отдельно стоящее здание (ОСЗ)",
    "imageUrl": "1.png"
  },
  {
    "title": "Встроенные помещения",
    "imageUrl": "2.png"
  },
  {
    "title": "Земельные участки",
    "imageUrl": "3.png"
  },
  {
    "title": "Офисные помещения",
    "imageUrl": "4.png"
  },
  {
    "title": "Производственные помещения",
    "imageUrl": "5.png"
  },
  {
    "title": "Складские помещения",
    "imageUrl": "6.png"
  }
])

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


  {
    "title": "Производственные помещения",
    "imageUrl": "5.png"
  },

])


</script>


<style>

</style>