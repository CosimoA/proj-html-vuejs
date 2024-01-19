<script>
export default {
    name: "About",
    data() {
        return {
            aboutData: {
                title1: "We are a creative",
                title2: "web",
                title3: "design agency",
                paragraph1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.",
                title4: "Our Visions",
                title5: "Get to know",
                title6: "our team",

            },
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
            teamMembers: [
                {
                    name: "Anna Philandros",
                    role: "Creative Director",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...",
                    image: "url('/team1.png')",
                }, {
                    name: "DEXTER MATTHEW",
                    role: "Designer",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...",
                    image: "url('/team2.png')",
                }, {
                    name: "RANDY SMITH",
                    role: "Project Manager",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...",
                    image: "url('/team3.png')",
                }, {
                    name: "ANGELO GARNER",
                    role: "Co-founder",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...",
                    image: "url('/team4.png')",
                }, {
                    name: "JIMMIE BENEDICT",
                    role: "Frontend Developer",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...",
                    image: "url('/team5.png')",
                }, {
                    name: "JANET GARNER",
                    role: "Founder",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...",
                    image: "url('/team6.png')",
                },
            ],
            social: [
                { iconClass: "fa-brands fa-facebook", url: "#" },
                { iconClass: "fa-brands fa-twitter", url: "#" },
                { iconClass: "fa-brands fa-pinterest", url: "#" },
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
                <h1 class="txt-color">About Page</h1>
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
                                <h3><span>{{ aboutData.title1 }}</span></h3>
                            </div>
                            <div class="title-2">
                                <h3>
                                    <span>{{ aboutData.title2 }} </span>
                                    <span class="txt-color">{{ aboutData.title3 }}</span>
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
                            <p class="paragraf"> {{ aboutData.paragraph1 }} </p>
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
                            <h3 class="title">{{ aboutData.title4 }}</h3>
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

            <!-- OUR TEAM -->
            <section class="our-team">
                <div class="wrapper">

                    <div class="container-our-team">

                        <!-- TITLE -->
                        <div class="title">
                            <div class="title-1">
                                <h3><span>{{ aboutData.title5 }}</span></h3>
                            </div>
                            <div class="title-2">
                                <h3>
                                    <span class="txt-color">{{ aboutData.title6 }}</span>
                                </h3>
                            </div>
                        </div>

                        <!-- DIVIDER -->
                        <div class="container-bar">
                            <div class="bar">
                                <img src="/divider.svg" alt="divider">
                            </div>
                        </div>

                        <!-- TEAM -->
                        <div class="team-cards">
                            <div class="team-row">
                                <div v-for="(member, index) in teamMembers" :key="index" class="team-card"
                                    :style="{ backgroundImage: member.image }">
                                    <div class="single-card">
                                        <!-- <img :src="(`../public/${member.image}`)" alt="Team Member"> -->
                                        <div class="staff-content">
                                            <h4 class="col-title"><a href="#">{{ member.name }}</a></h4>
                                            <h5 class="col-subtitle">{{ member.role }}</h5>
                                            <div class="entry-content">
                                                {{ member.description }}
                                            </div>
                                            <div class="staff-footer">
                                                <ul class="social-list">
                                                    <li v-for="(socialItem, socialIndex) in social" :key="socialIndex">
                                                        <a class="socia-icon" :href="socialItem.url">
                                                            <span class="ico">
                                                                <i :class="socialItem.iconClass"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
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
        background-image: url(../assets/interior-PTCVAAC@2x.jpg);
        background-position: center;
        background-size: cover;
        margin-top: 150px;
        margin-bottom: 0;

        .container-visions {
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
                        justify-content: center;


                        .vision-card {
                            padding: 75px 40px;
                            min-width: 256px;
                            width: 90%;
                            border-radius: 15px;
                            margin: 1em 0;

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

    .our-team {
        .container-our-team {
            .title {
                text-align: center;
                margin-bottom: 20px;

                h3 {
                    font-size: 40px;
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

            .team-row {
                display: flex;
                flex-wrap: wrap;

                .team-card {
                    width: 80vw;
                    height: 80vw;
                    max-width: 474px;
                    max-height: 474px;
                    margin: 1em auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-size: cover;

                    &:hover .single-card {
                        transform: scale(1.027);
                        opacity: .9;
                    }

                    .single-card {
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(24deg, #1cd595, #8ddc63);
                        opacity: 0;
                        padding: 142px 0 167px;
                        transform: scale(0);
                        border-radius: 15px;
                        transition: transform 0.8s ease, opacity 0.5s ease;
                        padding: 16% 12% 14%;
                        transition: opacity 0.5s ease, transform 0.5s ease;

                        .staff-content {
                            color: white;

                            .col-title {
                                font-size: 29px;
                                font-weight: 500;
                                line-height: 36px;

                                a {
                                    text-decoration: none;
                                    color: inherit;
                                }
                            }

                            .col-subtitle {
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 20px;
                            }

                            .entry-content {
                                overflow: hidden;
                                padding: 25px 0;
                                border-bottom: 1px solid white;
                                margin-bottom: 25px;
                            }

                            .social-list {

                                list-style: none;
                                display: flex;

                                li {
                                    margin-right: 25px;

                                    i {
                                        color: white;
                                        font-size: 25px;
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }
    }
}

@media all and (min-width: 767px) and (max-width: 1024px) {
    main {
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

            .container-visions {

                .wrapper {

                    .vision-cards {

                        .vision-row {

                            .vision-card {
                                width: 45vw;
                            }
                        }
                    }
                }
            }
        }

        .our-team {
            .container-our-team {
                .title {
                    text-align: center;
                    margin-bottom: 20px;

                    h3 {
                        font-size: 40px;
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

                .team-row {
                    display: flex;
                    flex-wrap: wrap;

                    .team-card {
                        width: 45vw;
                        height: 45vw;

                        .single-card {

                            .staff-content {
                                color: white;
                                width: 300px;
                                height: 300px;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media all and (min-width: 1025px) {
    main {

        .about-visions {

            .container-visions {

                .wrapper {

                    .vision-cards {

                        .vision-row {

                            .vision-card {
                                width: 24vw;
                            }
                        }
                    }
                }
            }
        }

        .our-team {
            .container-our-team {

                .team-row {

                    .team-card {
                        width: 32vw;
                        height: 32vw;
                        min-width: 345px;
                        min-height: 345px;

                        .single-card {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            .staff-content {
                                min-width: 300px;
                                height: 300px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>