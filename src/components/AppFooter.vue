<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="top-footer">
        <div class="row-nb">
          <div class="col-nb">
            <div class="icon-container">
              <a href="#"
                ><img id="logo" src="/group-logo.png" alt="logo gruppo"
              /></a>
            </div>
            <div class="text-container">
              <p>
                While the lovely valley teems with vapour around me, and the
                meridian sun strikes the upper surface of the impenetrable
                foliage of my trees.While the lovely valley teems with vapour
                around me.
              </p>
            </div>
          </div>
          <div class="col-nb">
            <div class="title-container">
              <h4>QUICk LINKS</h4>
              <img src="/divider.svg" alt="divider" class="divider" />
            </div>
            <div class="text-container">
              <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Privacy Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-nb">
            <div class="title-container">
              <h4>CONTACT</h4>
              <img src="/divider.svg" alt="divider" class="divider" />
            </div>
            <div class="text-container">
              <p>
                Patricia C. Amedee 4401 Waldeck Street <br />
                Grapevine Nashville, TX 76051
              </p>
              <br />
              <p>info@yourdomain.com</p>
              <br />
              <p>+99 (0) 101 0000 888</p>
            </div>
          </div>
          <div class="col-nb">
            <div class="title-container">
              <h4>LOCATION ON MAP</h4>
              <img src="/divider.svg" alt="divider" class="divider" />
            </div>
            <div class="map-container">
              <img src="/map-footer.png" alt="google map" />
            </div>
          </div>
        </div>
      </div>
      <div class="bot-footer">
        <small>© 2024 PHLOX BUSINESS THEME.</small>
        <ul>
          <li>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.top-footer {
  padding: 5rem 2rem;
  color: $text-dark-gray;
  line-height: 1.5rem;
  width: 100%;
  margin: 0 auto;

  .row-nb {
    display: flex;
    flex-direction: column;

    #logo {
      width: auto;
      margin-bottom: 1rem;
    }

    .col-nb {
      margin-bottom: 3rem;

      h4 {
        margin-bottom: 1.5rem;
        font-weight: 700;
        color: $text-dark-gray;
      }

      .divider {
        margin-bottom: 1.5rem;
        width: 4.5rem;
      }

      ul {
        list-style-type: none;

        li {
          margin-bottom: 0.4rem;
          a:hover {
            color: $green;
          }
        }
      }
    }
  }
}

.bot-footer {
  @include flex(space_b);
  background: linear-gradient(to right, #444444, #191919);
  color: $text-light-gray;
  padding: 2.5rem;
  line-height: 2rem;
  font-weight: 500;

  ul {
    li {
      display: inline;
      margin: 0.8rem;

      a {
        color: $text-light-gray;
      }
    }
  }
}

img {
  object-fit: cover;
  width: 100%;
  max-height: 15rem;
}

a {
  color: $text-dark-gray;
  text-decoration: none;
}

//TABLET VERSION
@media all and (min-width: 767px) and (max-width: 1024px) {
  .top-footer {
    margin: 0 auto;

    .row-nb {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
      .col-nb {
        width: calc(50% - 2rem);
      }
    }
  }
}

//DESKTOP VERSION
@media all and (min-width: 1025px) {
  .top-footer {
    .row-nb {
      flex-direction: row;
      gap: 2rem;
      .col-nb {
        width: 25%;
      }
    }
  }
}
</style>
