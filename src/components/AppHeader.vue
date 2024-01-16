<script>

export default {
  name: "AppHeader",
  data() {
    return {
      menuOpen: false,
      navLinksList: [
        'Home',
        'About',
        'Contacts',
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },

}

</script>

<template>
  <header>
    <section>
      <div class="logo">
        <a href="">
          <img src="../assets/cropped-Group-39-2x.png" alt="Logo">
        </a>
      </div>
      <div class="hamburger-icon" @click="toggleMenu">
        <span>
          <i class="fa-solid fa-bars"></i>
        </span>
      </div>


    </section>
    <div class="open-hamburger-menu" v-if="menuOpen">

      <nav>
        <ul>
          <li v-for="link in navLinksList" :key="link">
            <a href="#">{{ link }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

div {
  // background-color: pink;
  // border: 1px solid black;
  // width: 100%;
}

.logo,
.hamburger-icon {
  // min-height: 97px;
  display: flex;
  align-items: center;
  padding: 10px;

}

header {
  min-height: 97px;
  width: 100%;
  position: fixed;
  z-index: 500;
}

section {
  @include flex (space_b);

  padding: 16px 30px 4px 35px;

  a img {
    display: block
  }
}

ul {
  list-style: none;
  text-align: center;
}

i {
  font-size: 25px;
}
</style>  
