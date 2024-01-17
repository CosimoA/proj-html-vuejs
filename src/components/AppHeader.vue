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
    // Metodo per invertire lo stato di menuOpen (aprire/chiuso)
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
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
      this.resetLinkColors();
    },
    handleLogoClick() {
      this.setActiveLink('Home');
    },
    // Metodo per reimpostare i colori dei link nel menu
    resetLinkColors() {
      this.navLinksList.forEach((link) => {
        // Seleziona l'elemento del link nel menu
        const linkElement = document.querySelector(`.menu-link-${link}`);
        // Se l'elemento esiste, rimuovi la classe 'active'
        if (linkElement) {
          linkElement.classList.remove('active');
        }
      });
    },
    // Metodo per aggiornare la visibilità del menu in base alla larghezza dello schermo
    updateNavVisibility() {
      // Se la larghezza dello schermo è maggiore o uguale a 767px
      if (window.innerWidth >= 767) {
        // Imposta menuOpen a true quando la media query è attiva
        this.menuOpen = true;
      } else {
        // Altrimenti, chiudi il menu
        this.menuOpen = false;
      }
    },
  },
  mounted() {
    // Aggiungi un listener per rilevare i cambiamenti nella larghezza dello schermo al momento del mount del componente
    window.addEventListener('resize', this.updateNavVisibility);
    // Chiama il metodo all'avvio del componente per impostare inizialmente la visibilità del menu
    this.updateNavVisibility();
  },
  destroyed() {
    // Rimuovi il listener quando il componente viene distrutto per evitare memory leaks
    window.removeEventListener('resize', this.updateNavVisibility);
  },
}

</script>

<template>
  <header>
    <section>
      <!-- LOGO -->
      <div class="logo">
        <router-link to="/" ref="homeLink" class="menu-link" :class="{ 'active': currentPage === 'Home' }"
          @click="handleLogoClick">
          <img src="../assets/cropped-Group-39-2x.png" alt="Logo">
        </router-link>

      </div>

      <!-- NAVBAR -->
      <div class="nav-container" v-show="menuOpen">
        <nav class="fullscreen-menu" :class="{ 'visible': menuOpen }">
          <div class="close-button" @click="toggleMenu">
            <div class="circle">
              <i class="fa-solid fa-times"></i>
            </div>
          </div>
          <ul>
            <li v-for=" link  in  navLinksList " :key="link">
              <router-link :to="link.toLowerCase() === 'home' ? '/' : link.toLowerCase()" class="menu-link"
                :class="{ 'active': link === currentPage }" @click="setActiveLink(link)">
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
            <span class="aux-overlay"></span>
            <span class="aux-text">PURCHASE</span>
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
// GENERAL
ul {
  list-style: none;
  text-align: center;
  padding: 0;
}

i {
  font-size: 25px;
}

// HEADER STYLE
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

    .logo,
    .hamburger-icon {
      display: flex;
      align-items: center;
      padding: 10px;
    }

    >div {
      padding: 10px 20px;
    }

    .button-container {
      display: none;
    }




  }

  // NAV STYLE

  .nav-container {
    flex-grow: 1;
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
  }

  // MEDIA QUERY PERSONALISATION
  .menu-link {
    display: block;
    color: #000;
    text-decoration: none;
    font-size: 24px;
    font-weight: normal;
    margin: 10px 0;
    transition: color 0.3s ease, transform 0.3s ease;


  }

  .menu-link.active {
    color: black;
    font-weight: bold;
    transform: scale(1.1);

  }

  .fullscreen-menu.visible {
    opacity: 1;
    transform: scale(1);
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
    box-shadow: 6px 6px 25px 0 rgba(0, 217, 166, .35);
    text-shadow: 0 0 10px rgba(0, 0, 0, .04);
    border: none;
    width: 156px;
    height: 52px;
    font-size: .75em;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;

    &:before {
      content: '';
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
}


// TABLET LAYOUT
@media all and (min-width: 767px) and (max-width: 1024px) {

  header {
    section {

      .hamburger-icon {
        display: none;
      }

      .button-container {
        display: block;
        width: 249px;
        height: 54px;

        .purchase-button {
          display: none;
          // background-color: pink;
        }
      }
    }

    .fullscreen-menu {
      display: block;
      position: static;
      height: 54px;
      transform: scale(1);

      .close-button {
        display: none;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .menu-link {
        font-size: 19px;
        margin: 0 10px;

      }
    }
  }
}



// DESKTOP LAYOUT
@media all and (min-width: 1025px) {
  header {
    section {

      .hamburger-icon {
        display: none;
      }

      .button-container {
        display: flex;
        align-items: center;
        width: 249px;
        height: 54px;

        .purchase-button {
          display: block;
        }
      }
    }



    .fullscreen-menu {
      display: block;
      position: static;
      height: 54px;
      transform: scale(1);

      .close-button {
        display: none;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .menu-link {
        font-size: 19px;
        margin: 0 10px;

      }
    }
  }
}
</style>