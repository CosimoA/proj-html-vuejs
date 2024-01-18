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
    // Metodo per invertire lo stato di menuOpen (aprirto/chiuso)
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    handleLogoClick() {
      this.setActiveLink("Home");
    },

    // Metodo per impostare il focus sui link della nav
    setLinkFocus() {
      this.navLinksList.forEach((link) => {
        // Seleziona l'elemento del link nel menu
        const linkElement = document.querySelector(`.menu-link-${link}`);
        // Se l'elemento esiste, rimuovi la classe 'active'
        if (linkElement) {
          linkElement.classList.remove("active");
        }
      });
    },

    // Metodo per impostare il link attivo, chiudendo il menu se necessario
    setActiveLink(link) {
      // Controlla se il menu è aperto e la larghezza dello schermo è inferiore a 767px
      if (this.menuOpen && window.innerWidth < 767) {
        // Chiudi il menu
        this.toggleMenu();
      }
      // Imposta il link corrente
      this.currentPage = link;
      // Reimposta i colori dei link
      this.setLinkFocus();
    },

    // Metodo per aggiornare la visibilità del menu in base alla larghezza dello schermo
    updateNavVisibility() {
      // Se la larghezza dello schermo è maggiore o uguale a 767px
      if (window.innerWidth >= 767) {
        this.menuOpen = true;
      } else {
        this.menuOpen = false;
      }
    },
  },
  mounted() {
    // Aggiungi un listener per rilevare i cambiamenti nella larghezza dello schermo al momento del mount del componente
    window.addEventListener("resize", this.updateNavVisibility);
    // Chiama il metodo all'avvio del componente per impostare inizialmente la visibilità del menu
    this.updateNavVisibility();
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
          @click="handleLogoClick"
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
        <div>
          <button class="purchase-button">
            <span>PURCHASE</span>
          </button>
        </div>
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
@use "../styles/header.scss";

// GENERAL
ul {
  list-style: none;
  text-align: center;
  padding: 0;
}

i {
  font-size: 25px;
}

.logo img {
  width: 200px;
}

// BUTTON PERSONALISATION
.purchase-button {
  display: block;
  padding: 18px 45px;
  border-radius: 100em;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(to right, #8ddc63, #1cd595);
  box-shadow: 6px 6px 25px 0 rgba(0, 217, 166, 0.35);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.04);
  border: none;
  width: 156px;
  height: 52px;
  font-size: 0.75em;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 0%;
    background: -webkit-radial-gradient(circle, rgb(0, 0, 0) 0%, black 70%);
    background: radial-gradient(circle, rgb(0, 0, 0) 0%, black 70%);
    transition: width 0.3s ease-out;
    border-radius: 10rem;
    z-index: -1;
  }

  &:hover:before {
    width: 100%;
    height: 100%;
  }
}
</style>
