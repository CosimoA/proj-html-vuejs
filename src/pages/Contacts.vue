<script>
export default {
  name: "Contacts",
};
</script>

<template>
  <div class="top-container" id="titolo">
    <div class="title-container">
      <h1>Contact Page</h1>
    </div>
    <section>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4057.497174531503!2d0.12630488093133008!3d51.50777671475624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8afedac247253%3A0xc8b6c3de165bd527!2sCurlew%20Close%2FThamesmead%20Skate%20Park!5e0!3m2!1sit!2sit!4v1705421321316!5m2!1sit!2sit"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="wrapper">
        <div class="cards-container">
          <div class="contact-card">
            <i class="fa-solid fa-location-dot"></i>
            <div class="card-text">
              <h4>ADDRESS:</h4>
              <p>123 Ave, Lorem City, site Country, The World</p>
            </div>
          </div>
          <div class="contact-card">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <div class="card-text">
              <h4>PHONE:</h4>
              <p>(001) 123456789 - 234567891 info@phloxbusiness.com</p>
            </div>
          </div>
          <div class="contact-card">
            <i class="fa-regular fa-clock"></i>
            <div class="card-text">
              <h4>WORK HOURS:</h4>
              <p>
                Monday - Friday 09.00 - 23.00 <br />
                Sunday 09.00 - 16.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="wrapper">
    <section class="contact-section">
      <div class="get-in-touch">
        <h1>
          Please get in <span>touch</span> <br />
          with <span>us</span>
        </h1>
        <img src="/divider.svg" />
        <p>
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage of
          my trees, and but a few stray gleams steal into the inner
          sanctuary.When, while the lovely valley teems with vapour around me,
          and the meridian sun strikes the upper surface of the impenetrable
          foliage of my trees.
        </p>
      </div>

      <div class="form-container">
        <h1>Send message</h1>
        <form class="custom-form">
          <div class="input-box">
            <label class="form-label">Full name*</label>
            <input type="text" class="form-input" required />
          </div>
          <div class="input-box">
            <label class="form-label">Email*</label>
            <input type="text" class="form-input" required />
          </div>
          <div class="input-box">
            <label class="form-label">Please insert phone number</label>
            <input type="text" class="form-input" />
          </div>
          <div class="input-box message">
            <label class="form-label">Message</label>
            <input type="text" class="form-input" />
          </div>
          <input type="button" value="SEND NOW" id="submit-button" />
        </form>
      </div>
    </section>
  </div>
  <div id="scroll-to-top">
    <a href="#titolo"><i class="fa-solid fa-arrow-up"></i></a>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

#scroll-to-top {
  a {
    position: fixed;
    z-index: 99;
    bottom: 5rem;
    right: 5rem;
    border-radius: 180px;
    background-color: $white;
    border: 1px solid $text-dark-gray;
    color: #fff;
    padding: 0.4rem 0.7rem;
    transition: 0.5s;

    &:hover {
      background-color: $text-dark-gray;
    }
    &:hover i {
      color: $white;
    }

    i {
      color: $text-dark-gray;
    }
  }
}

.top-container {
  width: 100%;
  padding-top: 97px;
  margin: 0 auto;
}
.title-container {
  text-align: center;
  background: linear-gradient(to bottom, #f5f5f5, $white);
  color: $green;
  padding: 3rem;

  h1 {
    font-size: 40px;
    font-weight: 700;
  }
}

.map-container {
  max-width: 100%;
  position: relative;
  z-index: -1;

  iframe {
    width: 100%;
    height: 500px;
  }
}

.cards-container {
  margin-top: -100px;
  padding: 0 1.5rem;
  .contact-card {
    @include flex(space_b);
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    background-color: $white;
    margin: 0 auto 1rem auto;
    padding: 2rem;
    width: 95%;
    box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.2);

    h4 {
      color: $text-dark-gray;
      margin: 1rem;
    }

    p {
      color: $text-dark-gray;
      font-size: 13px;
    }

    i {
      color: $green;
      font-size: 4rem;
    }
  }
}
.contact-section {
  padding: 5rem 2rem;
  h1 {
    margin: 1rem 0;
    font-size: 2rem;
    font-weight: 600;
  }

  span {
    color: $green;
  }
  .get-in-touch {
    text-align: center;

    p {
      margin: 3rem 0;
      margin-bottom: 5rem;
    }
  }

  .form-container {
    margin: 3rem 0;

    h1 {
      font-weight: 700;
      margin-bottom: 2rem;
    }

    .custom-form {
      text-align: right;

      .input-box {
        position: relative;
        width: 100%;
        height: 3rem;
        border-bottom: 2px solid #444444;
        margin-bottom: 5rem;

        .form-label {
          position: absolute;
          top: 10px;
          left: 5px;
          font-size: 0.7rem;
        }
        .form-input {
          width: 100%;
          height: 100%;
          background: transparent;
          border: 0;
          color: $text-dark-gray;
          outline: none;
        }
      }
    }
  }
}

#submit-button {
  background: linear-gradient(to right, #99e15e, $green);
  border: 0;
  border-radius: 30px;
  padding: 1rem 0;
  width: 10rem;
  color: $white;
  font-weight: 500;
}

//TABLET VERSION
@media all and (min-width: 767px) and (max-width: 1024px) {
  .cards-container {
    @include flex(horizontal);
    gap: 1.5rem;
    .contact-card {
      width: calc(100% / 3);
    }
  }

  .contact-section {
    padding: 5rem;
    .get-in-touch {
      h1 {
        font-size: 3rem;
      }
    }
  }
}

//DESKTOP VERSION
@media all and (min-width: 1025px) {
  .cards-container {
    @include flex(horizontal);
    padding: 0 5rem;
    gap: 1.5rem;
    .contact-card {
      flex-direction: row;
      justify-content: space-evenly;
      padding: 5rem 2rem;
      text-align: start;
      line-height: 1.5rem;
      max-height: 15rem;
      h4 {
        margin: 1rem 0;
      }
    }
  }

  .contact-section {
    @include flex(horizontal);
    justify-content: space-between;
    gap: 5rem;
    .get-in-touch {
      width: 70%;
      text-align: start;

      h1 {
        font-size: 3.5rem;
      }
    }
    .form-container {
      width: 100%;
      padding: 6rem 2rem 0 1rem;
      .custom-form {
        @include flex(space_b);
        flex-wrap: wrap;
        gap: 2rem;

        .input-box {
          width: calc((100% / 3) - 2rem);
          margin-bottom: 2rem;
        }

        .message {
          width: 100%;
        }
        #submit-button {
          margin-left: calc(100% - 10rem);
        }
      }
    }
  }
}
</style>
