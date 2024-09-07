<template>
  <div class="bg-brand-bright">
    <offer class="bg-none md:bg-[url('public/img/offer.png')] ">
      <div class="offer__container md:py-16">
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
            <input class="w-full py-3 outline-none h-full text-base md:text-2xl text-center" type="text" placeholder="поиск"
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
        <div class="relative z-20 w-full">
          <Filter v-if="filter" class="absolute w-full" @updateFilter="filter = false"/>
        </div>
        <div
            class="bg-white mt-3 py-2  p-2.5  md:p-0 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg">
          <div class="flex items-center justify-between pl-2 pb-3">
            <h3 class="text-black text-base md:text-white">ПРОДАЖА</h3>
            <AppButton class=" py-[3px] px-[10px] md:py-1 md:px-2  block md:hidden">
              <div class="flex items-center gap-3">
                <p>Показать всё</p>
                <img src="/img/icons/arrowright.svg" alt="">
              </div>
            </AppButton>
          </div>
          <swiper
              :slidesPerView="6"
              :spaceBetween="30"
              :modules="modules"
              class="mySwiper"
              :breakpoints="{
'0': {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
              '380': {
        slidesPerView: 1.9,
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
            class="bg-white mt-3 p-2 md:p-0 p-2.5   pl-2 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg">
          <div class="flex items-center justify-between pb-3">
            <h3 class="text-black text-base md:text-white">АРЕНДА</h3>
            <AppButton class=" py-[3px] px-[10px] md:py-1 md:px-2  block md:hidden">
              <div class="flex items-center gap-3">
                <p>Показать всё</p>
                <img src="/img/icons/arrowright.svg" alt="">
              </div>
            </AppButton>
          </div>
          <swiper
              :slidesPerView="6"
              :spaceBetween="30"
              :modules="modules"
              class="mySwiper"
              :breakpoints="{
                '0': {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
              '380': {
        slidesPerView: 1.9,
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
    <section class="location container p-6 md:py-6 md:bg-[url('img/map.png')] bg-cover bg-no-repeat">
      <div
          class="metro bg-white mt-3 p-2.5 md:p-0 py-2 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg">
        <h3 class="pb-3 text-base">РЯДОМ С <span>МЕТРО</span></h3>
        <div class="grid-cols-4 items-start pb-3 hidden md:grid gap-y-2 ">
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Автово</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Адмиралтейская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Академическая</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Балтийская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Бухарестская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Василеостровская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Владимирская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Волковская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Выборгская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Горьковская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Гостиный двор</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Гражданский проспект</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Достоевская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Елизаровская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Звёздная</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Звенигородская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Кировский завод</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Комендантский проспект</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Ломоносовская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Маяковская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Международная</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Московская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Московские ворота</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Нарвская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Невский проспект</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Новочеркасская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Обводный канал</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Обухово</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Озерки</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Парк Победы</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Парнас</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Петроградская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Пионерская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Площадь Александра Невского</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Площадь Восстания</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Площадь Ленина</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Проспект Просвещения</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Проспект Славы</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Пушкинская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Садовая</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Сенная площадь</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Спасская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Спортивная</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Старая деревня</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Технологический институт</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Удельная</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Фрунзенская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Чёрная речка</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Чернышевская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Чкаловская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Электросила</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Автово</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Адмиралтейская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Академическая</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Крестовский остров</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Купчино</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Ладожская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Ленинский проспект</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Лесная</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Лиговский проспект</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Горьковская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Гостиный двор</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Гражданский проспект</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Площадь Мужества</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Политехническая</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Приморская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Пролетарская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Проспект Большевиков</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Проспект Ветеранов</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Достоевская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Елизаровская</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Звёздная</a>
          </div>
        </div>
        <div class="flex items-center gap-2 bg-brand-bright px-3 py-2 rounded-xl  block md:hidden">
          <input type="text" placeholder="поиск" class="w-full outline-none bg-transparent" v-model="metro">
          <img src="/img/icons/close.svg" alt="" @click="metro=''">
          <AppButton class="py-[2px] px-1 text-base">
            Найти
          </AppButton>
        </div>
      </div>

      <div
          class="near bg-white mt-3 p-2 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg">
        <h3 class="pb-3 text-base">В ВАШЕМ <span>РАЙОНЕ</span></h3>
        <div class="grid-cols-4 items-start pb-3  hidden md:grid gap-y-2">
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Адмиралтейский</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Василеостровский</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Выборгский</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Калининский</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Кировский</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Красногвардейский</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Красносельский</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Московский</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Невский</a>
          </div>
          <div class="flex flex-col gap-2">
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Петроградский</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Приморский</a>
            <a class="text-sm w-fit hover:text-brand-blue hover:underline" href="#">Пушкинский</a>
          </div>
        </div>
        <div class="flex items-center gap-2 bg-brand-bright px-3 py-2 rounded-xl block md:hidden">
          <input type="text" placeholder="поиск" class="w-full outline-none bg-transparent" v-model="area">
          <img src="/img/icons/close.svg" alt="" @click="area=''">
          <AppButton class="py-[2px] px-1 text-base">
            Найти
          </AppButton>
        </div>
      </div>
    </section>

    <section class="about sm:bg-white py-3 md:py-10">
      <div class="container rounded flex items-center gap-6">
        <img class="hidden lg:block" src="../public/img/about.png" alt="">
        <div
            class="mt-3  p-2.5  md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg max-[1024px]:bg-[url('/public/img/aboutbg.png')] bg-cover bg-white">
          <h2 class="pb-3 text-brand-grey text-3xl text-xl md:text-3xl">Аренда коммерческой недвижимости на
            <span>ARENDA</span><span
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
          class=" bg-white mt-3  p-2.5  md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg bg-(url('/img/aboutbg.png'))">
        <div class="flex items-center justify-between pb-3">
          <h3 class="text-brand-grey md:text-2xl font-bold md:font-extrabold text-base">НОВЫЕ ОБЪЕКТЫ</h3>
          <AppButton class="hidden md:block">
            <p class="text-base">Добавить объект</p>
          </AppButton>
          <AppButton class="block md:hidden py-[3px] px-[10px] md:py-1 md:px-2">
            <div class="flex items-center gap-2">
              <p class="text-sm">Показать всё</p>
              <img src="/img/icons/arrowright.svg" alt="">
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