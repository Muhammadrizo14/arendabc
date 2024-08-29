<template>
  <div class="bg-brand-bright">
    <offer>
      <div class="offer__container py-6">
        <div class="bar p-3 bg-white rounded-md flex items-center gap-3 ">
          <AppButton>
            Фильтр
          </AppButton>
          <input class="w-full py-3 outline-none h-full  text-2xl" type="text" placeholder="поиск">
          <AppButton>
            Поиск
          </AppButton>
        </div>
        <div class="pt-6 pb-6">
          <h3 class="text-white">ПРОДАЖА</h3>
          <div class="grid-cols-5 grid gap-y-6 pt-3">
            <OfferCard title="Отдельно стоящее здание (ОСЗ)"/>
            <OfferCard title="Встроенные помещения"/>
            <OfferCard title="fass"/>
            <OfferCard title="fass"/>
            <OfferCard title="fass"/>
          </div>
        </div>
        <div class="pt-6 pb-6">
          <h3 class="text-white">АРЕНДА</h3>
          <div class="grid-cols-5 grid gap-y-6  pt-3">
            <OfferCard title="fasss"/>
            <OfferCard title="fasss"/>
            <OfferCard title="fasss"/>
            <OfferCard title="fasss"/>
            <OfferCard title="fasss"/>
          </div>
        </div>
      </div>
    </offer>
    <section class="location container py-6 bg-[url('img/map.png')] bg-cover bg-no-repeat bg">
      <h3 class="pb-3">РЯДОМ С <span>МЕТРО</span></h3>
      <div class="columns-3 items-start pb-3">
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
      <h3 class="pb-3">В ВАШЕМ <span>РАЙОНЕ</span></h3>
      <div class="columns-3 items-start pb-3">
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
    </section>

    <section class="about bg-white py-10">
      <div class="container flex items-center gap-6">
        <img src="../public/img/about.png" alt="">
        <div>
          <h1 class="pb-3">Аренда коммерческой недвижимости на <span>ARENDABC</span></h1>
          <p class="pb-4 text-brand-grey">
            Большинство частных предпринимателей в какой-то момент своей деятельности сталкиваются с необходимостью
            разместить свое дело в одном месте. И не имеет значения, связано это с потребностью обслуживать клиентов или
            просто более эффективно организовать рабочий процесс.
          </p>
          <p class="pb-4 text-brand-grey">Разумеется, далеко не всегда предприниматель в состоянии купить коммерческую недвижимость, особенно в
            начале своей деятельности. Отличным решением станет аренда, которая в нашей стране пользуется огромной
            популярностью.</p>
          <p class="pb-4 text-brand-grey"> На сегодняшний день коммерческая недвижимость в Санкт-Петербурге, Москве или любом другом городе России
            позволяет быстро решить возникшую проблему. Существует действительно большое количество бизнес-центров, где
            любой желающий может выбрать офис под свои потребности.
          </p>
        </div>
      </div>
    </section>

    <section class="container py-6">
      <div class="flex justify-between pb-3">
        <h1>НОВЫЕ ОБЪЕКТЫ</h1>
        <AppButton>
          Добавить объект
        </AppButton>
      </div>
<div class="flex gap-6">
  <card/>
  <card/>
  <card/>
  <card/>
</div>

    </section>

  </div>
</template>


<script setup lang="ts">
import Offer from "../components/Offer/offer.vue";
import AppButton from "../components/AppButton.vue";
import OfferCard from "../components/Offer/OfferCard.vue";
import Card from "../components/card.vue";
</script>


<style>

</style>