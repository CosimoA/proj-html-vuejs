<script>
export default {
  name: "AppClient",
  data() {
    return {
      icons: [
        {
          src: "/client-1-2x.png",
          alt: "clientlogo1",
        },
        {
          src: "/client-9-2x.png",
          alt: "clientlogo2",
        },
        {
          src: "/client-7-2x.png",
          alt: "clientlogo3",
        },
        {
          src: "/client-3-2x.png",
          alt: "clientlogo4",
        },
        {
          src: "/client-4-2x.png",
          alt: "clientlogo5",
        },
        {
          src: "/client-5-2x.png",
          alt: "clientlogo6",
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <section>
        <div class="card-container">
          <div class="card-nb green">
            <div class="card-top">
              <small>What Are You Waiting for?</small>
              <h1 class="bold">Let's Talk About Work</h1>
            </div>
            <div class="card-bot">
              <button>START NOW</button>
            </div>
          </div>
          <div class="card-nb">
            <div class="card-top">
              <small>Are You Ready?</small>
              <h1 class="bold">Start a New Project</h1>
            </div>
            <div class="card-bot">
              <div class="input-box">
                <input type="text" placeholder="Enter Your Email Address" />
                <input type="button" value="SUBMIT" class="bold" />
              </div>
            </div>
          </div>
        </div>
        <div class="clients-container">
          <ul>
            <li v-for="client in icons">
              <img :src="client.src" :alt="client.alt" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

section {
  position: relative;
  margin-top: 25rem;

  .card-container {
    position: absolute;
    z-index: 10;
    top: -55%;
    left: 1.5rem;

    .card-nb {
      text-align: center;
      background: linear-gradient(to top left, #191919, #4c4c4c);
      box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.5);
      @include flex(both);
      flex-direction: column;
      padding: 5rem 0.5rem;
      color: $white;
      border-radius: 20px;
      font-weight: 500;
      margin-bottom: 2rem;

      small {
        color: #aaaaaa;
      }

      h1 {
        font-size: 28px;
        margin-bottom: 1rem;
      }

      .input-box {
        width: 100%;
        margin-top: 3rem;
        border: 0;
        border-radius: 30px;
        background: linear-gradient(to right, #555555, #323232);
        padding: 1rem 1.5rem;

        input {
          background: transparent;
          border: 0;
          color: $text-light-gray;
          outline: none;
        }
      }

      button {
        color: $white;
        border: 0;
        border-radius: 30px;
        background: linear-gradient(to left, #191919, #4c4c4c);
        margin-top: 3rem;
        font-size: 14px;
        padding: 15px 45px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
      }
    }

    .green {
      background: linear-gradient(to bottom left, #99e15e, $green);
      box-shadow: 6px 6px 20px rgba($green, 0.5);

      small {
        color: #f9f9f9;
      }
    }

    .bold {
      font-weight: 700;
    }
  }

  .clients-container {
    background-color: #f6f6f6;
    padding: 15rem 0 5rem 0;
    text-align: center;

    ul {
      list-style: none;

      li {
        padding: 2rem;
      }
    }
  }
}
</style>
