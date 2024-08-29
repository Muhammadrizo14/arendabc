<template>
  <div class="relative bg-cover bg-no-repeat min-h-[211px] h-full w-[180px] rounded-lg flex flex-col justify-end bg-[url('./img/offer_card.png')]">
    <div class="bg-[#2C2C2CB8] rounded-b-lg p-2 text-white ">
     <p class="text-sm text-center"> {{ props.title }}</p>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  title: String,
  image: String,
})
</script>