<script setup>

import Multiselect from 'vue-multiselect'
import OfferCard from "./Offer/OfferCard";
import AppButton from "./AppButton";

const active_tab = ref(0)

const selectedArea = ref([])

const areas = ref(
    [
      '1', '3', '4', '2', '3'
    ]
)

const selectedType = ref([])

const types = ref(
    [
      '1', '3', '4', '2', '3'
    ]
)


const selectedMetro = ref([])

const metros = ref(
    [
      '1', '2', '3', '4', '5'
    ]
)

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

const emit = defineEmits(['updateFilter']);
</script>

<template>
  <div class="bg-white mt-3 border border-custom-gray rounded-lg container">
    <div class="category flex  pt-2 md:p-4 flex-col gap-2 md:flex-row md:items-center">
      <div class="w-1/5">
        <p class="text-base">Категория</p>
      </div>
      <div class="flex items-center w-4/5">
        <div @click="active_tab=0" :class="active_tab === 0 ? 'bg-brand-blue text-white' : 'text-brand-blue'"
             class="cursor-pointer py-px  px-4 md:py-1 lg:px-4  border border-brand-blue  rounded-l-lg">Все
        </div>
        <div @click="active_tab=1" :class="active_tab === 1 ? 'bg-brand-blue text-white' : 'text-brand-blue'"
             class="cursor-pointer py-px  px-4 md:py-1 lg:px-4 text-brand-blue border border-brand-blue">Аренда
        </div>
        <div @click="active_tab=2" :class="active_tab === 2 ? 'bg-brand-blue text-white' : 'text-brand-blue'"
             class="cursor-pointer py-px  px-4 md:py-1 lg:px-4 text-brand-blue border border-brand-blue rounded-r-lg">Продажа
        </div>
      </div>
    </div>
    <div class="category flex  pt-6 md:p-4 flex-col gap-2 md:flex-row md:items-center md:bg-brand-bright ">
      <div class="w-1/5">
        <p class="text-base">Тип</p>
      </div>
      <div class="flex items-center gap-2 w-5/5 md:w-4/5">
        <OfferCard class="hidden md:flex" v-for="home in rent" :image="home.imageUrl" :title="home.title"/>
        <div class="block md:hidden w-full">
          <multiselect v-model="selectedType"  :show-labels="false" :options="types" :allowEmpty="false" :multiple="true" placeholder="Выбрать район"  :searchable="false">
            <template #selection="{ values, search, isOpen }">
        <span class="multiselect__single"
              v-if="values.length"
              v-show="!isOpen">{{ values.length }} выбрано</span>
            </template>
          </multiselect>
        </div>
      </div>
    </div>
    <div class="category flex pt-6 md:p-4 flex-col md:flex-row md:items-center">
      <div class="w-full pb-3 md:pb-0 flex items-center justify-between md:w-1/5">
        <p class="text-base">Цена</p>
        <p class="text-brand-blue text-base md:hidden block">{всё/кв.м.}</p>
      </div>
      <div class="flex items-center gap-2 w-5/5 md:w-4/5">
        <input type="number" placeholder="от" class="bg-brand-input p-2 rounded md:w-fit w-1/2">
        <input type="number" placeholder="до" class="bg-brand-input p-2 rounded md:w-fit w-1/2">
        <p class="text-brand-blue text-base md:block hidden">{всё/кв.м.}</p>
      </div>
    </div>
    <div class="category flex pt-6 md:p-4 md:bg-brand-bright flex-col md:flex-row md:items-center ">
      <div class="w-full pb-3 md:pb-0 flex items-center justify-between md:w-1/5">
        <p class="text-base">Площадь</p>
        <p class="text-brand-blue text-base block md:hidden">кв.м.</p>
      </div>
      <div class="flex items-center gap-2 w-5/5 md:w-4/5">
        <input type="number" placeholder="от" class="bg-brand-input p-2 rounded md:w-fit w-1/2">
        <input type="number" placeholder="до" class="bg-brand-input p-2 rounded md:w-fit w-1/2">
        <p class="text-brand-blue text-base hidden md:block">кв.м.</p>
      </div>
    </div>
    <div class="category pt-6 md:p-4 flex flex-col md:flex-row md:items-center ">
      <div class="w-1/5 pb-2 md:pb-0 ">
        <p class="text-base">Районы</p>
      </div>
      <div class="flex items-center gap-2 w-5/5 md:w-4/5">
        <multiselect v-model="selectedArea" :searchable="false"  :show-labels="false" :options="areas" :allowEmpty="false" :multiple="true" placeholder="Выбрать район">
          <template #selection="{ values, search, isOpen }">
        <span class="multiselect__single"
              v-if="values.length"
              v-show="!isOpen">{{ values.length }} выбрано</span>
          </template>
        </multiselect>
      </div>
    </div>
    <div class="category pt-6 md:p-4 flex flex-col md:flex-row md:items-center md:bg-brand-bright">
      <div class="w-1/5 pb-2 md:pb-0">
        <p class="text-base">Метро</p>
      </div>
      <div class="flex items-center gap-2 w-5/5 md:w-4/5">
        <multiselect  v-model="selectedMetro"  :show-labels="false" :searchable="false" :options="metros" :allowEmpty="false" placeholder="Выбрать метро." ></multiselect>
      </div>
    </div>
    <div class="category  pt-6 md:p-4 flex flex-col md:flex-row md:items-center">
      <div class="md:w-1/5 pb-2 md:pb-0 w-full">
        <p class="text-base">Произвольный текст</p>
      </div>
      <div class="flex items-center gap-2 w-5/5 md:w-4/5">
        <input type="text" placeholder="поиск" class="bg-brand-input p-2 rounded w-full md:w-[304px]">
      </div>
    </div>
    <div class="w-full bg-brand-input h-px my-2"></div>
    <div class="category flex items-center p-4">
      <div class="md:w-1/5">
      </div>
      <div class="flex items-center gap-2 w-full md:w-4/5 justify-between md:justify-start">
        <AppButton class="md:py-1 sm:px-5" @click="emit('updateFilter')">
          Применить
        </AppButton>
        <AppButton class="min-[0px]:bg-brand-input min-[0px]:text-black md:py-1 sm:px-5" @click="emit('updateFilter')">
          Сбросить
        </AppButton>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.multiselect {
  width: 300px;
  @media (max-width: 768px) {
    width: 100%;
  }
  &__tags {
    background: #f5f5f5;
    .multiselect__single {
      background: #f5f5f5;
    }
    .multiselect__input {
      background: #f5f5f5;
    }
  }
  &__option--highlight {
    background: #00B6F4;
    &:after {
      background: #00B6F4;
    }
  }

}
</style>
