import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


export default defineNuxtPlugin((nuxtApp) => {
  Fancybox.defaults = {
    // Custom options
    infinite: false,
    // Other options...
  };

  nuxtApp.provide('Fancybox', Fancybox);
});
