<template>
  <div class="relative">
    <AppHeader/>
    <slot/>
    <!-- this div appears in mobile version to avoid conflict between mobile-footer and content-->
    <div class="pb-[70px] bg-brand-bright"></div>
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