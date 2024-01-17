<script>
export default {
  name: "Contacts",
};
</script>

<template>
  <main>
    <span>
      <i class="fas fa-times"></i>
    </span>
    <div class="container">
      <div class="title-container">
        <h1>Contact Page</h1>
      </div>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4057.497174531503!2d0.12630488093133008!3d51.50777671475624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8afedac247253%3A0xc8b6c3de165bd527!2sCurlew%20Close%2FThamesmead%20Skate%20Park!5e0!3m2!1sit!2sit!4v1705421321316!5m2!1sit!2sit"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <section class="gray-gradient">
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
          <i class="far fa-clock"></i>
          <h1>WORK HOURS:</h1>
          <p>Monday - Friday 09.00 - 23.00</p>
          <p>Sunday 09.00 - 16.00</p>
        </div>
      </section>
      <section>
        <h1>Please get in touch with us</h1>
        <img src="/divider.svg" />
        <p>
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage of
          my trees, and but a few stray gleams steal into the inner
          sanctuary.When, while the lovely valley teems with vapour around me,
          and the meridian sun strikes the upper surface of the impenetrable
          foliage of my trees.
        </p>
        <h2>Send message</h2>
        <div class="form-container">
          <form></form>
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

    iframe {
      width: 100%;
      height: 500px;
    }
  }

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
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    h1 {
      color: $text-dark-gray;
      margin: 2rem;
    }

    p {
      color: #565656;
    }

    i {
      color: $green;
    }
  }
}

.gray-gradient {
  background: linear-gradient(to bottom, #efefef, #ffffff);
}
</style>
