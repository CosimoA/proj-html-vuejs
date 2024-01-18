<script>
export default {
    name: "About",
    data() {
        return {
            visionCards: [
                {
                    title: "Virtual Document",
                    paragraph: "Far far away, behind the word mountains, far from the countries Vokalia...",
                    iconClass: "fa-solid fa-database",
                }, {
                    title: "Flexible Payments",
                    paragraph: "Far far away, behind the word mountains, far from the countries Vokalia...",
                    iconClass: "fa-solid fa-money-bill-wave",
                }, {
                    title: "Virtual Document",
                    paragraph: "Far far away, behind the word mountains, far from the countries Vokalia...",
                    iconClass: "fa-solid fa-gauge-high",
                }, {
                    title: "Virtual Document",
                    paragraph: "Far far away, behind the word mountains, far from the countries Vokalia...",
                    iconClass: "fa-brands fa-sketch",
                },

            ],
        };
    },
};
</script> 

<template>
    <main>
        <div>
            <!-- HEADER SECTION -->
            <section class="header-title">
                <h1>About Page</h1>
            </section>

            <!-- JUMBOTRON -->
            <section class="about-jumbo">
                <div class="wrapper">

                    <div class="container-img">
                        <div class="overlay"></div>

                        <img src="../assets/woman-photographer-drinking-coffee-and-working-PJNBP6U-858x632.jpg"
                            alt="Profile of attractive charming curly young woman photographer drinking coffee and working with laptop on workplace">
                    </div>

                    <div class="container-info">
                        <!-- TITLE -->
                        <div class="title">
                            <div class="title-1">
                                <h3><span>We are a creative</span></h3>
                            </div>
                            <div class="title-2">
                                <h3><span>web </span>
                                    <span class="txt-color">design agency</span>
                                </h3>
                            </div>
                        </div>
                        <!-- DIVIDER -->
                        <div class="container-bar">
                            <div class="bar">
                                <img src="/divider.svg" alt="divider">
                            </div>
                        </div>
                        <!-- PARAGRAPH -->
                        <div class="container-paragraf">
                            <p class="paragraf">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there
                                live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                                Semantics,
                                a large language ocean.Separated they live in Bookmarksgrove.
                            </p>
                        </div>

                        <div class="container-button">
                            <div>
                                <button class="button">
                                    <span>READ MORE</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <!-- VISIONS SECTIONS -->
            <section class="about-visions">
                <div class="overlay-visions"></div>


                <div class="container-visions">
                    <div class="wrapper">
                        <!-- TITLE -->
                        <div class="vision-title">
                            <h3 class="title">Our Visions</h3>
                        </div>
                        <!-- DIVIDER -->
                        <div class="vision-divider">
                            <div class="container-bar">
                                <div class="bar">
                                    <img src="/divider-white.svg" alt="divider">
                                </div>
                            </div>
                        </div>
                        <!-- CARDS -->
                        <div class="vision-cards">
                            <div class="vision-row">
                                <div v-for="(card, index) in visionCards" :key="index" class="vision-card">
                                    <div class="single-card">
                                        <div class="card-img">
                                            <div class="img-container">
                                                <span class="ico"><i :class="card.iconClass"></i></span>
                                            </div>
                                        </div>

                                        <div class="card-text">
                                            <h4 class="card-title">{{ card.title }}</h4>
                                            <div class="card-paragraph">
                                                <p>{{ card.paragraph }}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>




    </main>
</template> 

<style lang="scss" scoped>
@use "../styles/general.scss";

main {

    // GENERAL
    .txt-color {
        color: rgb(0, 217, 166);
    }

    .header-title {
        padding: 50px 35px;
        text-align: center;
        background-color: rgb(249 249 249);

        h1 {
            font-size: 43px;
            font-weight: bold;
            color: rgb(0, 217, 166);
        }
    }

    .about-jumbo {
        margin-top: 85px;
        padding: 10% 5%;
        background-color: rgb(249 249 249);

        .container-img {
            position: relative;
            overflow: hidden;
            width: 100%;

            img {
                width: 100%;
                z-index: 1;
            }

            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgb(249 249 249);
                z-index: 2;
                animation: slideIn 0.5s ease-out 0.3s forwards;


            }
        }

        .container-info {
            .title {
                text-align: center;
                margin-bottom: 20px;

                h3 {
                    font-size: 33px;
                    line-height: 45px;
                    font-weight: 600;
                }

                .title-1 {
                    margin: 80px 0 0;

                }

                .title-2 {
                    margin-top: 1em;

                }

            }

            .container-bar {
                display: flex;

                .bar {
                    margin: 0 auto;

                    img {
                        height: 5px;
                    }
                }
            }

            .container-paragraf {
                margin: 42px 0 0;

                .paragraf {
                    text-align: center;
                    margin: 0 0 1em;
                }
            }

            .container-button {
                margin: 80px 0 0;
                padding: 10px;

                div {
                    display: flex;
                    justify-content: center;
                    height: 100px;
                    width: 100%;
                }
            }
        }

        // ANIMATIONS
        @keyframes slideIn {
            to {
                left: 100%;
                background-color: rgb(249 249 249);
            }
        }
    }

    .about-visions {
        position: relative;
        background-image: url(../assets/interior-PTCVAAC@2x.jpg);
        background-position: center;
        background-size: cover;
        margin-top: 150px;
        margin-bottom: 0;
        // padding: 142px 0 167px;


        // .overlay-visions {
        //     background-image: linear-gradient(24deg, #1cd595, #8ddc63);
        //     opacity: .96;
        //     height: 100%;
        //     width: 100%;
        //     top: 0;
        //     left: 0;
        //     position: absolute;
        // }

        .container-visions {
            // position: absolute;
            width: 100%;
            background: linear-gradient(24deg, #1cd595, #8ddc63);
            opacity: .96;
            padding: 142px 0 167px;

            .wrapper {

                .vision-title {
                    margin-bottom: 20px;

                    .title {
                        font-size: 45px;
                        font-weight: 600;
                        line-height: 63px;
                        color: white;
                        text-align: center;
                    }
                }

                .vision-divider {
                    width: 100%;

                    .container-bar {
                        display: flex;

                        .bar {
                            margin: 0 auto;
                        }
                    }
                }

                .vision-cards {
                    margin-top: 70px;

                    .vision-row {
                        display: flex;
                        flex-wrap: wrap;

                        .vision-card {
                            padding: 75px 40px;
                            min-width: 256px;
                            width: 100%;
                            border-radius: 15px;

                            &:hover {
                                background-color: rgba(0, 0, 0, 0.1);
                            }

                            .card-img {
                                width: 150px;
                                height: 150px;
                                margin: 0 auto;

                                .img-container {
                                    height: 100%;
                                    border-radius: 50%;
                                    text-align: center;
                                    border-style: solid;
                                    border-width: 3px;
                                    border-color: rgba(255, 255, 255, .3);
                                    padding: 30px;
                                    color: #fff;

                                    .ico {
                                        font-size: 60px;
                                    }
                                }
                            }

                        }

                        color: white;
                        text-align: center;

                        .card-title {
                            font-size: 29px;
                            font-weight: 500;
                            padding: 35px 0 0;
                            margin: 5px 0 20px;
                        }

                        .card-paragraph {
                            font-size: 16px;
                            font-weight: 300;
                        }


                    }
                }
            }

        }
    }
}
</style>