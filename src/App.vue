<script >

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';



export default {
  components: {
    AppHeader,
    AppFooter,

  },
  data() {
    return {
      store,
    }
  },
  created() {
    // this.getCardsInfo();
    // this.getArchetypesList();
  }
}

</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss';
// @use './styles/partials/mixins' as *;
// @use './styles/partials/variables' as *;
</style>
