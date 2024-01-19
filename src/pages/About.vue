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
@use "../styles/about.scss";
</style>