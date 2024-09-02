<template>
  <div class="h-full bg-brand-bright">
    <offer>
      <div class="flex justify-between flex-col md:flex-row md:items-center py-6 ">
        <div>
          <h3 class="font-bold text-base md:text-xl ">[ОБЪЕКТ/БЦ/ТРЦ/ТЦ/ОФИС/ОСЗ]</h3>
          <h2 class="text-white font-black text-xl md:text-2xl">ПРОДАЖА ТЦ НА ПУЛКОВСКОМ ШОССЕ</h2>
        </div>
        <div class="flex gap-2 items-center pt-3 md:pt-0 justify-between">
          <button
              class="bg-red-500 flex items-center  w-1/2  justify-center  md:px-4 py-2 text-white gap-2 rounded md:w-auto">
            <img src="/public/img/icons/pdf.png" alt="">
            Скачать PDF
          </button>
          <button
              class="bg-brand-blue flex items-center px-6 md:px-4 py-2 text-white gap-2 rounded w-1/2 justify-center md:w-auto">
            <img src="/public/img/icons/start.png" alt="">
            Избранное
          </button>
        </div>
      </div>
    </offer>
    <section class="detail  pt-6">

      <div class="container flex gap-6   flex-col md:flex-row">
        <div class="flex flex-col  items-center w-2/2 md:w-3/5">

          <div class="w-full">

            <swiper
                :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
                :spaceBetween="10"
                :navigation="true"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                class="mySwiper2"
            >
              <swiper-slide>
                <div class="relative">
                  <div class="absolute flex gap-2 left-3 top-2 items-center">
                    <div class="bg-brand-blue text-white  px-2 py-1 rounded-lg">
                      <span>A+</span>
                    </div>
                    <div class="bg-brand-green text-white px-2 py-1 rounded-lg">
                      <span>Продажа</span>
                    </div>
                  </div>
                </div>
                <a href="/img/carousel.png" data-fancybox="gallery">
                  <img
                      src="/img/carousel.png"
                      alt="Nature"
                  />
                </a>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <div class="absolute flex gap-2 left-3 top-2 items-center">
                    <div class="bg-brand-blue text-white  px-2 py-1 rounded-lg">
                      <span>A+</span>
                    </div>
                    <div class="bg-brand-green text-white px-2 py-1 rounded-lg">
                      <span>Продажа</span>
                    </div>
                  </div>
                </div>
                <a href="/img/carousel.png" data-fancybox="gallery">
                  <img
                      src="/img/carousel.png"
                      alt="Nature"
                  />
                </a>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <div class="absolute flex gap-2 left-3 top-2 items-center">
                    <div class="bg-brand-blue text-white  px-2 py-1 rounded-lg">
                      <span>A+</span>
                    </div>
                    <div class="bg-brand-green text-white px-2 py-1 rounded-lg">
                      <span>Продажа</span>
                    </div>
                  </div>
                </div>
                <a href="/img/carousel.png" data-fancybox="gallery">
                  <img
                      src="/img/carousel.png"
                      alt="Nature"
                  />
                </a>
              </swiper-slide>
            </swiper>
            <swiper
                @swiper="setThumbsSwiper"
                :spaceBetween="10"
                :slidesPerView="6"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="modules"
                class="mythumb"
            >
              <swiper-slide>
                <img src="../../public/img/carousel.png"/>
              </swiper-slide>
              <swiper-slide>
                <img src="../../public/img/carousel.png"/>
              </swiper-slide>
              <swiper-slide>
                <img src="../../public/img/carousel.png"/>
              </swiper-slide>
            </swiper>

          </div>
          <div class="py-6 px-3 bg-white border mt-3 rounded-lg text-brand-grey w-full">
            <h3 class="text-lg md:text-xl"><span class="underline">АРЕНДА</span> ОТДЕЛЬНО СТОЯЩЕГО ЗДАНИЯ, <span
                class="text-brand-green underline">1280 КВ.М.</span></h3>

            <div class="flex items-center gap-3 pt-3">
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.007 15.5228H12.451C13.0074 15.5228 13.5411 15.3184 13.9345 14.9545C14.3279 14.5906 14.549 14.0971 14.549 13.5825V1.94035C14.549 1.42574 14.3279 0.932203 13.9345 0.568316C13.5411 0.204429 13.0074 0 12.451 0H2.54895C1.99255 0 1.45894 0.204429 1.06551 0.568316C0.672077 0.932203 0.451049 1.42574 0.451049 1.94035V13.5825C0.451049 14.0971 0.672077 14.5906 1.06551 14.9545C1.45894 15.3184 1.99255 15.5228 2.54895 15.5228H2.99301L0 18H1.90559L2.86364 17.2077H12.1538L13.1119 18H15L12.007 15.5228ZM11.6958 14.3295C11.4883 14.3295 11.2855 14.2726 11.113 14.166C10.9405 14.0594 10.8061 13.9079 10.7267 13.7306C10.6473 13.5533 10.6265 13.3582 10.667 13.1701C10.7075 12.9819 10.8074 12.809 10.9541 12.6733C11.1008 12.5376 11.2877 12.4452 11.4912 12.4078C11.6946 12.3704 11.9055 12.3896 12.0972 12.463C12.2889 12.5364 12.4527 12.6608 12.568 12.8203C12.6832 12.9799 12.7448 13.1674 12.7448 13.3593C12.7471 13.4873 12.7216 13.6145 12.6697 13.7332C12.6179 13.8519 12.5407 13.9597 12.4428 14.0502C12.3449 14.1407 12.2283 14.2121 12.1 14.2601C11.9717 14.3081 11.8342 14.3317 11.6958 14.3295ZM5.15035 0.747036H9.84615C9.99916 0.747036 10.1459 0.803254 10.2541 0.903322C10.3623 1.00339 10.4231 1.13911 10.4231 1.28063C10.4231 1.42215 10.3623 1.55787 10.2541 1.65794C10.1459 1.75801 9.99916 1.81423 9.84615 1.81423H5.15385C5.00084 1.81423 4.85409 1.75801 4.7459 1.65794C4.63771 1.55787 4.57692 1.42215 4.57692 1.28063C4.57692 1.13911 4.63771 1.00339 4.7459 0.903322C4.85409 0.803254 5.00084 0.747036 5.15385 0.747036H5.15035ZM1.5 8.44377V3.56055C1.5 3.30324 1.61051 3.05647 1.80723 2.87453C2.00395 2.69258 2.27075 2.59037 2.54895 2.59037H12.451C12.7292 2.59037 12.9961 2.69258 13.1928 2.87453C13.3895 3.05647 13.5 3.30324 13.5 3.56055V8.44377C13.5 8.70107 13.3895 8.94784 13.1928 9.12978C12.9961 9.31173 12.7292 9.41394 12.451 9.41394H2.54895C2.27075 9.41394 2.00395 9.31173 1.80723 9.12978C1.61051 8.94784 1.5 8.70107 1.5 8.44377ZM2.25524 13.3755C2.25527 13.1829 2.31726 12.9947 2.43331 12.8349C2.54936 12.675 2.71423 12.5507 2.90692 12.4777C3.09961 12.4048 3.31141 12.3865 3.51535 12.4253C3.71929 12.4641 3.90614 12.5581 4.05212 12.6954C4.1981 12.8327 4.2966 13.0071 4.33508 13.1963C4.37356 13.3856 4.35027 13.5811 4.26819 13.7581C4.18611 13.9351 4.04895 14.0855 3.87416 14.1901C3.69938 14.2947 3.49489 14.3489 3.28671 14.3457C3.14978 14.3457 3.0142 14.3205 2.88791 14.2715C2.76161 14.2226 2.64712 14.1509 2.5511 14.0606C2.45509 13.9702 2.37948 13.8632 2.32869 13.7455C2.27789 13.6279 2.25292 13.5021 2.25524 13.3755ZM4.23776 16.0435L4.86014 15.5228H10.1503L10.7483 16.0435H4.23776Z"
                    fill="#E73235"/>
              </svg>
              <p>Балтийская</p>
              <p>5 мин.</p>
            </div>
            <div class="flex items-center gap-3">
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.007 15.5228H12.451C13.0074 15.5228 13.5411 15.3184 13.9345 14.9545C14.3279 14.5906 14.549 14.0971 14.549 13.5825V1.94035C14.549 1.42574 14.3279 0.932203 13.9345 0.568316C13.5411 0.204429 13.0074 0 12.451 0H2.54895C1.99255 0 1.45894 0.204429 1.06551 0.568316C0.672077 0.932203 0.451049 1.42574 0.451049 1.94035V13.5825C0.451049 14.0971 0.672077 14.5906 1.06551 14.9545C1.45894 15.3184 1.99255 15.5228 2.54895 15.5228H2.99301L0 18H1.90559L2.86364 17.2077H12.1538L13.1119 18H15L12.007 15.5228ZM11.6958 14.3295C11.4883 14.3295 11.2855 14.2726 11.113 14.166C10.9405 14.0594 10.8061 13.9079 10.7267 13.7306C10.6473 13.5533 10.6265 13.3582 10.667 13.1701C10.7075 12.9819 10.8074 12.809 10.9541 12.6733C11.1008 12.5376 11.2877 12.4452 11.4912 12.4078C11.6946 12.3704 11.9055 12.3896 12.0972 12.463C12.2889 12.5364 12.4527 12.6608 12.568 12.8203C12.6832 12.9799 12.7448 13.1674 12.7448 13.3593C12.7471 13.4873 12.7216 13.6145 12.6697 13.7332C12.6179 13.8519 12.5407 13.9597 12.4428 14.0502C12.3449 14.1407 12.2283 14.2121 12.1 14.2601C11.9717 14.3081 11.8342 14.3317 11.6958 14.3295ZM5.15035 0.747036H9.84615C9.99916 0.747036 10.1459 0.803254 10.2541 0.903322C10.3623 1.00339 10.4231 1.13911 10.4231 1.28063C10.4231 1.42215 10.3623 1.55787 10.2541 1.65794C10.1459 1.75801 9.99916 1.81423 9.84615 1.81423H5.15385C5.00084 1.81423 4.85409 1.75801 4.7459 1.65794C4.63771 1.55787 4.57692 1.42215 4.57692 1.28063C4.57692 1.13911 4.63771 1.00339 4.7459 0.903322C4.85409 0.803254 5.00084 0.747036 5.15385 0.747036H5.15035ZM1.5 8.44377V3.56055C1.5 3.30324 1.61051 3.05647 1.80723 2.87453C2.00395 2.69258 2.27075 2.59037 2.54895 2.59037H12.451C12.7292 2.59037 12.9961 2.69258 13.1928 2.87453C13.3895 3.05647 13.5 3.30324 13.5 3.56055V8.44377C13.5 8.70107 13.3895 8.94784 13.1928 9.12978C12.9961 9.31173 12.7292 9.41394 12.451 9.41394H2.54895C2.27075 9.41394 2.00395 9.31173 1.80723 9.12978C1.61051 8.94784 1.5 8.70107 1.5 8.44377ZM2.25524 13.3755C2.25527 13.1829 2.31726 12.9947 2.43331 12.8349C2.54936 12.675 2.71423 12.5507 2.90692 12.4777C3.09961 12.4048 3.31141 12.3865 3.51535 12.4253C3.71929 12.4641 3.90614 12.5581 4.05212 12.6954C4.1981 12.8327 4.2966 13.0071 4.33508 13.1963C4.37356 13.3856 4.35027 13.5811 4.26819 13.7581C4.18611 13.9351 4.04895 14.0855 3.87416 14.1901C3.69938 14.2947 3.49489 14.3489 3.28671 14.3457C3.14978 14.3457 3.0142 14.3205 2.88791 14.2715C2.76161 14.2226 2.64712 14.1509 2.5511 14.0606C2.45509 13.9702 2.37948 13.8632 2.32869 13.7455C2.27789 13.6279 2.25292 13.5021 2.25524 13.3755ZM4.23776 16.0435L4.86014 15.5228H10.1503L10.7483 16.0435H4.23776Z"
                    fill="#702785"/>
              </svg>
              <p>Бухарестская</p>
              <p>17 мин.</p>
            </div>
            <p class="py-3 font-light w-full  " :class="hideInfo ? 'max-[728px]:truncate max-[768px]:text-wrap max-[768px]:h-[110px]' : ''">
              Предлагаем Вашему вниманию объект коммерческой недвижимости общей площадью более 22000 м2. Здание
              расположено на земельном участке площадью 5 Га, который имеет категорию земель населенных пунктов и
              предназначен для размещения объектов розничной торговли.
              <br>
              <br>
              Объект обеспечен всеми необходимыми коммуникациями, включая электроснабжение мощностью 1000 кВт,
              теплоснабжение от собственной котельной мощностью 268 кВт, а также водопровод и канализацию объемом 54,24
              кубических метра.
              Этот объект идеально подходит для организации крупного торгового центра или логистического комплекса,
              благодаря своей площади и удобному расположению.
            </p>

            <p class="text-brand-blue font-medium cursor-pointer block md:hidden" @click="hideInfo=!hideInfo">{{hideInfo ? 'Подробнее' : 'Скрыть'}}</p>

            <div class="items-center justify-between pt-5 hidden md:flex">
              <p class="text-base font-bold">№ 1234568</p>
              <p class="text-base font-bold text-brand-blue">
                ОБНОВЛЕНО 23.09.2024
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col-reverse md:flex-col w-2/2 md:w-2/5">
          <div class="items-center justify-between pt-5 flex md:hidden">
            <p class="text-base">№ 1234568</p>
            <p class="text-base text-brand-blue">
              ОБНОВЛЕНО 23.09.2024
            </p>
          </div>
          <iframe
              src="https://yandex.com/map-widget/v1/?um=constructor%3A50b6cc0bb34e455ec6a7168ecb8673b2c1e6aaace3d0d977bc840e6ecaaba705&amp;source=constructor"
              class="w-full md:h-2/5 pt-3 md:pt-0 h-[500px]" frameborder="0"></iframe>
          <div>
            <div class="py-6 px-3 bg-white border mt-3 rounded-lg">
              <h3 class="pb-3 font-bold text-base md:text-lg">ЦЕНА</h3>

              <div class="flex items-center justify-between ">
                <p class="font-medium">1 988 ₽</p>
                <p class="text-brand-grey">за кв.м. </p>
              </div>
              <div class="flex items-center justify-between ">
                <p class="font-medium">5,381,516 ₽</p>
                <p class="text-brand-grey">в месяц</p>
              </div>
              <div class="flex items-center justify-between ">
                <p class="font-medium">64,578,192 ₽</p>
                <p class="text-brand-grey">в год</p>
              </div>
            </div>
            <div class="py-6 px-3 bg-white border mt-3 rounded-lg">
              <h3 class="text-brand-blue font-bold text-base md:text-lg">ПО ВОПРОСУ АРЕНДЫ</h3>

              <div class="flex items-center gap-8 pt-3">
                <div class="flex items-center gap-2  w-1/3">
                  <img src="/public/img/icons/phone.svg" alt="">
                  <p class="font-medium">ТЕЛЕФОН</p>
                </div>
                <div class="flex w-2/3">
                  <p class="text-brand-grey truncate" :class="phone ? 'w-auto' : 'w-20'">+7(999) 999 999 999</p>
                  <p class="text-brand-blue underline cursor-pointer" v-if="!phone" @click="phone = true">Показать</p>
                </div>
              </div>
              <div class="flex items-center gap-8">
                <div class="flex items-center gap-2 w-1/3">
                  <img src="/public/img/icons/email.png" alt="">


                  <p class="font-medium">ЭЛ.ПОЧТА</p>
                </div>
                <div class="flex w-2/3">
                  <p class="text-brand-grey truncate" :class="email ? 'w-auto' : 'w-20'">INFO@ARENDABC.COM</p>
                  <p class="text-brand-blue underline cursor-pointer" v-if="!email" @click="email = true">Показать</p>
                </div>
              </div>
            </div>
            <div class="py-6 px-3 bg-white border mt-3 rounded-lg">
              <h3 class="font-bold text-base md:text-lg">ДОПОЛНИТЕЛЬНО</h3>

              <div class="flex items-center gap-8 pt-3">
                <div class="flex items-center gap-2  w-1/2">
                  <img src="/public/img/icons/work.svg" alt="">

                  <p class="font-medium">УСН </p>
                </div>
                <p class="text-brand-grey">Есть</p>
              </div>
              <div class="flex items-center gap-8">
                <div class="flex items-center gap-2 w-1/2">
                  <img src="/public/img/icons/time.svg" alt="">

                  <p class="font-medium">РЕЖИМ РАБОТЫ</p>
                </div>
                <p class="text-brand-grey">9:00-21:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hidden md:block ">
      <div class="container">
        <div
            class=" bg-white mt-3 p-2 md:pb-6 md:pt-6 md:bg-transparent md:border-0 border border-custom-gray rounded-lg bg-(url('/img/aboutbg.png'))">
          <div class="flex items-center justify-between pb-3">
            <h3 class="text-brand-grey font-extrabold">НАЙДЕНО <span>45 ПОХОЖИХ ОБЪЕКТОВ</span></h3>

            <AppButton class="hidden md:block">
              <p class="text-base">Посмотреть всёт</p>
            </AppButton>
            <AppButton class="block md:hidden py-1 px-2">
              <div class="flex items-center gap-2">
                <p class="text-sm">Показать всё</p>
                <img src="/img/icons/arrowright.png" alt="">
              </div>
            </AppButton>
          </div>

          <div class="flex items-center gap-3">
            <card class="w" v-for="home in new Array(4).fill(null)"/>
          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script setup>
import AppButton from "../../components/AppButton";
import {Swiper, SwiperSlide} from 'swiper/vue';

import {FreeMode, Navigation, Thumbs} from 'swiper/modules';

const modules = ref([FreeMode, Navigation, Thumbs])
import {onMounted} from 'vue';
import {Fancybox} from '@fancyapps/ui';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


onMounted(() => {
  Fancybox.bind("[data-fancybox]", {});
});
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};


const phone = ref(false)
const email = ref(false)
const thumbsSwiper = ref(null);
const hideInfo = ref(true);

</script>


<style scoped lang="scss">
.swiper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mythumb {
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  flex-direction: column;

  * {
    .swiper-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
}


.mythumb .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mythumb .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>
