<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter/>
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default {
  components: {AppFooter, AppHeader}
}
</script>