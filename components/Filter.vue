<script setup>
import Multiselect from 'vue-multiselect'
import OfferCard from "./Offer/OfferCard";
import AppButton from "./AppButton";


const active_tab = ref(0)

const selectedArea = ref([])
const activeCard = ref(null);
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
  {
    "title": "Встроенные помещения",
    "imageUrl": "2.png"
  },
])

function setActiveCard(index) {
  activeCard.value = index;
}

const emit = defineEmits(['updateFilter']);
</script>

<template>
  <div class="bg-white mt-3 border border-custom-gray rounded-lg w-full filter">
    <div class="relative block md:hidden">
      <div class="absolute right-1 top-1">
        <button class="close" @click="emit('updateFilter')">
          <svg fill="#000000" height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 512 512" xml:space="preserve">
            <g>
              <g>
                <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512
                  512,452.922 315.076,256 		"/>
              </g>
            </g>
            </svg>
        </button>
      </div>
    </div>
    <div class="category flex pt-2 md:p-4 flex-col gap-2 md:flex-row md:items-center px-2">
      <div class="w-1/5">
        <p class="text-base">Категория</p>
      </div>
      <div class="flex items-center w-4/5">
        <div @click="active_tab=0" :class="active_tab === 0 ? 'bg-brand-blue text-white' : 'text-brand-blue'"
             class="cursor-pointer py-px  px-4 md:py-1 lg:px-6  border border-brand-blue  rounded-l-lg">Все
        </div>
        <div @click="active_tab=1" :class="active_tab === 1 ? 'bg-brand-blue text-white' : 'text-brand-blue'"
             class="cursor-pointer py-px  px-4 md:py-1 lg:px-4 text-brand-blue border border-brand-blue">Аренда
        </div>
        <div @click="active_tab=2" :class="active_tab === 2 ? 'bg-brand-blue text-white' : 'text-brand-blue'"
             class="cursor-pointer py-px  px-4 md:py-1 lg:px-4 text-brand-blue border border-brand-blue rounded-r-lg">
          Продажа
        </div>
      </div>
    </div>
    <div class="category flex  pt-6 md:p-4 flex-col gap-2 md:flex-row md:items-center md:bg-brand-bright  px-2">
      <div class="w-1/5">
        <p class="text-base">Тип</p>
      </div>
      <div class="flex items-center gap-2 w-5/5 md:w-4/5">
        <OfferCard class="hidden md:flex !h-[169px] min-h-fit text-xs" v-for="(home, index) in rent" :key="index" :image="home.imageUrl"
                   :title="home.title" :class="{ 'border-brand-blue border-[3px]': activeCard === index }"
                   @click="setActiveCard(index)"/>
        <div class="block md:hidden w-full">
          <multiselect class="bright" v-model="selectedType" :show-labels="false" :options="types" :allowEmpty="false"
                       :multiple="true"
                       placeholder="Выбрать район" :searchable="false">
            <template #selection="{ values, search, isOpen }">
        <span class="multiselect__single"
              v-if="values.length"
              v-show="!isOpen">{{ values.length }} выбрано</span>
            </template>
          </multiselect>
        </div>
      </div>

    </div>
    <div class="category flex pt-6 md:p-4 flex-col md:flex-row md:items-center px-2">
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
    <div class="category flex pt-6 md:p-4 md:bg-brand-bright flex-col md:flex-row md:items-center   px-2">
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
    <div class="category pt-6 md:p-4 flex flex-col md:flex-row md:items-center  px-2">
      <div class="w-1/5 pb-2 md:pb-0 ">
        <p class="text-base">Районы</p>
      </div>
      <div class="flex items-center gap-2 w-5/5 md:w-4/5">
        <multiselect class="bright" v-model="selectedArea" :searchable="false" :show-labels="false" :options="areas"
                     :allowEmpty="false" :multiple="true" placeholder="Выбрать район">
          <template #selection="{ values, search, isOpen }">
        <span class="multiselect__single"
              v-if="values.length"
              v-show="!isOpen">{{ values.length }} выбрано</span>
          </template>
        </multiselect>
      </div>
    </div>
    <div class="category pt-6 md:p-4 flex flex-col md:flex-row md:items-center md:bg-brand-bright  px-2">
      <div class="w-1/5 pb-2 md:pb-0">
        <p class="text-base">Метро</p>
      </div>
      <div class="flex items-center gap-2 w-5/5 md:w-4/5">
        <multiselect class="bright" v-model="selectedMetro" :show-labels="false" :searchable="false" :options="metros"
                     :allowEmpty="false" placeholder="Выбрать метро."></multiselect>
      </div>
    </div>
    <div class="category  pt-6 md:p-4 flex flex-col md:flex-row md:items-center  px-2">
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


<style scoped>
.filter {
  box-shadow: 0px 8px 6px 0px #00000026;

}
</style>