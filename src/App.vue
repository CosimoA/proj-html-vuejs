<script >

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  components: {
    AppHeader,
    AppFooter,

  },
}

</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
@use './styles/general.scss';
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;
</style>
