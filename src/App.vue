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

  }
}

</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss" scoped>
@use './styles/general.scss';
// @use './styles/partials/mixins' as *;
// @use './styles/partials/variables' as *;
</style>
