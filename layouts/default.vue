<template>
  <div class="relative">
    <AppHeader />
    <slot class="pb-20"/>
    <AppFooter/>
    <AppMobileFooter/>
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import AppMobileFooter from "../components/AppMobileFooter";
export default {
  components: {AppMobileFooter, AppFooter, AppHeader}
}
</script>