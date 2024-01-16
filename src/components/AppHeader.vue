<script>

export default {
  name: "AppHeader",
  data() {
    return {
      menuOpen: false,
      currentPage: 'Home',
      navLinksList: [
        'Home',
        'About',
        'Contacts'
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    setActiveLink(link) {
      this.currentPage = link;
      this.toggleMenu();
      this.resetLinkColors();
    },
    resetLinkColors() {
      this.navLinksList.forEach((link) => {
        const linkElement = document.querySelector(`.menu-link-${link}`);
        if (linkElement) {
          linkElement.classList.remove('active');
        }
      });
    },
  },
}

</script>

<template>
  <header>
    <section>
      <div class="logo">
        <router-link to="/" ref="homeLink" class="menu-link" :class="{ 'active': currentPage === 'Home' }">
          <img src="../assets/cropped-Group-39-2x.png" alt="Logo">
        </router-link>
      </div>

      <div class="hamburger-icon" @click="toggleMenu">
        <span>
          <i class="fa-solid fa-bars"></i>
        </span>
      </div>
    </section>
    <nav class="fullscreen-menu" :class="{ 'visible': menuOpen }">
      <div class="close-button" @click="toggleMenu">
        <div class="circle">
          <i class="fa-solid fa-times"></i>
        </div>
      </div>
      <ul>
        <li v-for="link in navLinksList" :key="link">
          <router-link :to="link.toLowerCase() === 'home' ? '/' : link.toLowerCase()" class="menu-link"
            :class="{ 'active': link === currentPage }" @click="setActiveLink(link)">
            {{ link }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
header {
  min-height: 97px;
  width: 100%;
  position: fixed;
  z-index: 500;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px 4px 35px;

    a img {
      display: block;
    }
  }

  .logo,
  .hamburger-icon {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  i {
    font-size: 25px;
  }

  .menu-link.active {
    color: #777;
  }

}

.fullscreen-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.3s ease, transform 0.3s ease;

  .menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    flex-grow: 1;
  }

  .close-button {
    align-self: center;
    cursor: pointer;

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #333;

      i {
        color: #fff;
      }
    }
  }

  ul {
    list-style: none;
    text-align: center;
    padding: 0;
  }

  .menu-link {
    display: block;
    color: #000;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
    display: block;
    transition: color 0.3s ease, transform 0.3s ease;

    &:active {
      transform: scale(1.1);
    }

    // img {
    //   width: 100%;
    //   height: auto;
    // }
  }
}

.fullscreen-menu.visible {
  opacity: 1;
  transform: scale(1);
}
</style>