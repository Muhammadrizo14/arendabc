<template>
  <div class="container mx-auto">
    <AppHeader></AppHeader>
    <slot />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {AppHeader}
}
</script>