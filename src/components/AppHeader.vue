<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menuOpen: false,
      currentPage: "Home",
      navLinksList: ["Home", "About", "Contacts"],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    setActiveLink(link) {
      if (this.menuOpen) {
        this.toggleMenu();
      }
      this.currentPage = link;
      this.resetLinkColors();
    },
    resetLinkColors() {
      this.navLinksList.forEach((link) => {
        const linkElement = document.querySelector(`.menu-link-${link}`);
        if (linkElement) {
          linkElement.classList.remove("active");
        }
      });
    },
    updateNavVisibility() {
      if (window.innerWidth >= 767) {
        // Imposta menuOpen a true quando la media query è attiva
        this.menuOpen = true;
      } else {
        this.menuOpen = false;
      }
    },
  },
  mounted() {
    // Aggiungi un listener per rilevare i cambiamenti nella larghezza dello schermo
    window.addEventListener("resize", this.updateNavVisibility);
    // Chiama il metodo all'avvio del componente
    this.updateNavVisibility();
  },
  destroyed() {
    // Rimuovi il listener quando il componente viene distrutto per evitare memory leaks
    window.removeEventListener("resize", this.updateNavVisibility);
  },
};
</script>

<template>
  <header>
    <section>
      <!-- LOGO -->
      <div class="logo">
        <router-link
          to="/"
          ref="homeLink"
          class="menu-link"
          :class="{ active: currentPage === 'Home' }"
        >
          <img src="../assets/cropped-Group-39-2x.png" alt="Logo" />
        </router-link>
      </div>

      <!-- NAVBAR -->
      <div class="nav-container" v-show="menuOpen">
        <nav class="fullscreen-menu" :class="{ visible: menuOpen }">
          <div class="close-button" @click="toggleMenu">
            <div class="circle">
              <i class="fa-solid fa-times"></i>
            </div>
          </div>
          <ul>
            <li v-for="link in navLinksList" :key="link">
              <router-link
                :to="link.toLowerCase() === 'home' ? '/' : link.toLowerCase()"
                class="menu-link"
                :class="{ active: link === currentPage }"
                @click="setActiveLink(link)"
              >
                {{ link }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <!-- PURCHASE BUTTON -->
      <div class="button-container">
        <div class="purchase-button"></div>
      </div>
      <!-- HAMBURGER ICON -->
      <div class="hamburger-icon" @click="toggleMenu">
        <span>
          <i class="fa-solid fa-bars"></i>
        </span>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
.p10 {
  padding: 10px;
}

header {
  display: flex;
  min-height: 97px;
  width: 100%;
  position: fixed;
  z-index: 500;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 16px 30px 0 35px;

    a img {
      display: block;
    }

    > div {
      padding: 10px;
    }

    .button-container {
      display: none;
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
  }
}

.invisible {
  display: none;
}

.fullscreen-menu.visible {
  opacity: 1;
  transform: scale(1);
}

@media all and (min-width: 767px) and (max-width: 1024px) {
  header {
    section {
      justify-content: space-between;

      .button-container {
        display: block;
        width: 249px;
        height: 54px;

        .purchase-button {
          display: none;
          background-color: pink;
        }
      }
    }

    .hamburger-icon {
      display: none;
    }

    .fullscreen-menu {
      display: block;
      position: static;
      height: 54px;
      background-color: transparent;
      opacity: 1;
      transform: scale(1);

      .close-button {
        display: none;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .menu-link {
        font-size: 19px;
        font-weight: normal;
        margin: 0 10px;

        &:hover {
          font-weight: bolder;
        }
      }

      .menu-link.active {
        color: black;
      }
    }
  }
}

@media all and (min-width: 1025px) {
  header {
    section {
      justify-content: space-between;

      .button-container {
        display: block;
        width: 249px;
        height: 54px;

        .purchase-button {
          display: none;
          background-color: pink;
        }
      }
    }

    .hamburger-icon {
      display: none;
    }

    .fullscreen-menu {
      display: block;
      position: static;
      height: 54px;
      background-color: transparent;
      opacity: 1;
      transform: scale(1);

      .close-button {
        display: none;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .menu-link {
        font-size: 19px;
        font-weight: normal;
        margin: 0 10px;

        &:hover {
          font-weight: bolder;
        }
      }

      .menu-link.active {
        color: black;
      }
    }
  }
}
</style>
