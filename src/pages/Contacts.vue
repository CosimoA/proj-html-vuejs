<script>
export default {
  name: "Contacts",
};
</script>

<template>
  <main>
    <div class="container">
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
        <div class="cards-container">
          <div class="contact-card">
            <i class="fa-solid fa-location-dot"></i>
            <h1>ADDRESS:</h1>
            <p>123 Ave, Lorem City, site Country, The World</p>
          </div>
          <div class="contact-card">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <h1>PHONE:</h1>
            <p>(001) 123456789 - 234567891</p>
            <p>info@phloxbusiness.com</p>
          </div>
          <div class="contact-card">
            <i class="fa-regular fa-clock"></i>
            <h1>WORK HOURS:</h1>
            <p>Monday - Friday 09.00 - 23.00</p>
            <p>Sunday 09.00 - 16.00</p>
          </div>
        </div>
      </section>
      <section class="contact-section">
        <div class="get-in-touch">
          <h1>Please get in <span>touch</span> with <span>us</span></h1>
          <img src="/divider.svg" />
          <p>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary.When, while the lovely valley teems with vapour around me,
            and the meridian sun strikes the upper surface of the impenetrable
            foliage of my trees.
          </p>
        </div>

        <h1>Send message</h1>
        <div class="form-container">
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
            <div class="input-box">
              <label class="form-label">Message</label>
              <input type="text" class="form-input" />
            </div>
            <input type="button" value="SEND NOW" id="submit-button" />
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

main {
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
    .contact-card {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      line-height: 2rem;
      background-color: $white;
      width: 90%;
      margin: 0 auto 1rem auto;
      padding: 2rem;
      box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.2);

      h1 {
        color: $text-dark-gray;
        margin: 2rem;
      }

      p {
        color: #565656;
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
      }
    }

    .form-container {
      margin: 3rem 0;

      .custom-form .input-box {
        position: relative;
        width: 100%;
        height: 3rem;
        border-bottom: 2px solid #444444;
        margin-bottom: 3rem;

        .form-label {
          position: absolute;
          top: -5px;
          left: 5px;
          transform: translateY(-50%);
          font-size: 0.7rem;
          transition: 0.5s;
          pointer-events: none;
        }
        .form-input {
          width: 100%;
          height: 100%;
          background: transparent;
          border: 0;
          color: $text-dark-gray;
          outline: none;

          &:placeholder-shown + .form-label {
            top: 20px;
            font-size: 0.7rem;
          }

          &:focus + .form-label {
            top: 10px;
            font-size: 0.6rem;
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
    margin-left: calc(100% - 10rem);
    color: $white;
    font-weight: 500;
  }
}
</style>
