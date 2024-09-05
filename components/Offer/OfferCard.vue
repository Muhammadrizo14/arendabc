<template>
  <div class="relative bg-cover bg-no-repeat min-h-[211px] h-full w-[180px] rounded-2xl flex flex-col justify-end cursor-pointer"
       :style="{ backgroundImage: `url('/img/on_sell/${props.image}')` }">
    <div class="bg-[#2C2C2CB8] rounded-b-lg p-2 text-white h-[60px]">
      <p class="text-sm text-center  flex flex-column justify-center items-center h-full"> {{ props.title }}</p>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  title: String,
  image: String,
})
</script>