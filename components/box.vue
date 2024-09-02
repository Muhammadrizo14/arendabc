<template>
  <div>
    <a
        href="https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg"
        data-fancybox="gallery"
    >
      <img
          src="https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg"
          alt="Nature"
      />
    </a>
    <a
        href="https://source.unsplash.com/1200x800/?city"
        data-fancybox="gallery"
    >
      <img
          src="https://source.unsplash.com/400x300/?city"
          alt="City"
      />
    </a>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Fancybox } from '@fancyapps/ui';

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {});
});
</script>
