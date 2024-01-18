<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppClient from "./components/AppClient.vue";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppClient,
  },
  data() {
    return {
      store,
    };
  },
  created() {},
};
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppClient />
  <AppFooter />
</template>

<style lang="scss" scoped>
@use "./styles/general.scss";
// @use './styles/partials/mixins' as *;
// @use './styles/partials/variables' as *;
</style>
