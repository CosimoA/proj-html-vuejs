<script>
export default {
    name: "Home",

    data() {
        return {
            activeItem: 0,

            slides: [
                {
                    image: 'Group-36-2x.png',
                    title: 'We Are a Web Design',
                    title_col: 'Agency',
                    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they lived in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
                },
                {
                    image: 'Group-40-2x.png',
                    title: 'A Group of Expert',
                    title_col: 'Planners',
                    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they lived in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
                },
                {
                    image: 'Group-35-2x.png',
                    title: 'Focus on Your',
                    title_col: 'Business',
                    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they lived in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.',
                },
            ],

            webDesigns: [
                {
                    image: "url('/flowers.jpg')",
                    title: 'The Basket of Flowers',
                    scope: ["BRANDING", "MARKETING"],
                },
                {
                    image: "url('/ruota.jpg')",
                    title: 'A Famous Ferris Wheel',
                    scope: ["MARKETING"],
                },
                {
                    image: "url('/scarpe.jpg')",
                    title: 'Complementary Colors',
                    scope: ["BRANDING", "MARKETING"],
                },
                {
                    image: "url('/desk.jpg')",
                    title: 'Business Prestige',
                    scope: ["BRANDING"],
                },
                {
                    image: "url('/origami.jpg')",
                    title: 'Colorful Origami Boats',
                    scope: ["BRANDING", "MARKETING"],
                },
                {
                    image: "url('/sofa.jpg')",
                    title: 'Modern Coach',
                    scope: ["MARKETING"],
                },
                {
                    image: "url('/mongolfiere.jpg')",
                    title: 'Hot Air Ballons',
                    scope: ["BRANDING", "MARKETING"],
                },
                {
                    image: "url('/arance.jpg')",
                    title: 'Make Difference',
                    scope: ["BRANDING"],
                },
            ],
        }
    },
    // proprietà che mi permette di fa scorrere avanti o indietro (ciclo infinito) le immagini nel carosello al click delle frecce
    methods: {
        prevItem() {
            this.activeItem--;
            if (this.activeItem < 0) {
                this.activeItem = this.slides.length - 1;
            }
        },
        nextItem() {
            this.activeItem++;
            if (this.activeItem > this.slides.length - 1) {
                this.activeItem = 0;
            }
        }
    }
};
</script> 

<template>
    <main>
        <section style="background-color: #fafafa;">
            <div class="section_container">
                <div class="slider-wrapper" tabindex="0">
                    <div class="item" style="/* background-color: rgb(207, 107, 13) */;">
                        <div class="item_container">
                            <h2>17 YEARS OF EXPERIENCE</h2>
                            <h1>{{ slides[activeItem].title }} <br><span>{{ slides[activeItem].title_col }}</span></h1>
                            <img src="/divider.svg" alt="">
                            <p>
                                {{ slides[activeItem].text }}
                            </p>
                            <div class="read d-flex justify-content-between align-items-center">
                                <div class="button_read">
                                    <a href="#"> READ MORE</a>
                                </div>
                                <div class="thumbs d-flex">
                                    <div class="prev m-1 d-flex justify-content-center align-items-center"
                                        @click="prevItem">
                                        <i class="fa-solid fa-caret-left fa-xl" style="color: #ffffff;"></i>
                                    </div>
                                    <div class="next m-1 d-flex justify-content-center align-items-center"
                                        @click="nextItem">
                                        <i class="fa-solid fa-caret-right fa-xl" style="color: #ffffff;"></i>
                                    </div>
                                </div> <!--end thumbs-->
                            </div> <!--end read-->
                        </div> <!--end text-->
                        <div class="item_img">
                            <div class="img_container">
                                <img :src="slides[activeItem].image" />
                            </div>
                            <div class="text_container mt-4"
                                style="background-color: rgb(238, 238, 238, 1); width: fit-content;">
                                <ul class="nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Facebook</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Instagram</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Twitter</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link">Youtube</a>
                                    </li>
                                </ul> <!--end nav-->
                            </div> <!--end text_container-->
                        </div> <!--end item_img-->
                    </div> <!-- end item-->
                </div> <!--end slider-wrapper-->
            </div> <!--end container-->
        </section> <!--end section-->
        <section style="padding: 6em 5em;">
            <div class="features d-flex flex-column justify-content-between">
                <div class="feat_text d-flex flex-column align-items-center">
                    <p id="elegant"> We Are Here To Make Your <span>Website</span> Look More <span>Elegant</span> And
                        Stylish!
                    </p>
                    <div style="text-align: center; ">
                        <img src="/divider.svg" alt="">
                    </div>
                    <div class="button_view purchase-button mt-4 mb-5">
                        <a href="#"> VIEW ALL</a>
                    </div>
                </div> <!--end feat text-->
                <div class="featcard_container ">
                    <div class="feat_card p-4">
                        <div class="card_body ">
                            <div class="card_text px-3 pt-5">
                                <i class="fa-solid fa-gauge-high fa-xl mb-5"></i>
                                <p style="font-size: 2em;">Speed Optimization</p>
                                <p> Far far away, behind the word mountains, far from the countries Vokalia Separated..</p>
                            </div> <!--end card_text-->
                        </div> <!--end card body-->
                    </div> <!--end feat_card-->
                </div> <!--end featcard_container-->
                <div class="featcard_container ">
                    <div class="feat_card p-4">
                        <div class="card_body ">
                            <div class="card_text px-3 pt-5">
                                <i class="fa-solid fa-tablet-screen-button fa-xl mb-5"></i>
                                <p style="font-size: 2em;">Web Design</p>
                                <p> Far far away, behind the word mountains, far from the countries Vokalia Separated..</p>
                            </div> <!--end card_text-->
                        </div> <!--end card body-->
                    </div> <!--end feat_card-->
                </div> <!--end featcard_container-->
                <div class="featcard_container ">
                    <div class="feat_card p-4">
                        <div class="card_body ">
                            <div class="card_text px-3 pt-5">
                                <i class="fa-solid fa-cloud fa-xl mb-5"></i>
                                <p style="font-size: 2em;">Cloud Solutions</p>
                                <p> Far far away, behind the word mountains, far from the countries Vokalia Separated..</p>
                            </div> <!--end card_text-->
                        </div> <!--end card body-->
                    </div> <!--end feat_card-->
                </div> <!--end featcard_container-->
                <div class="featcard_container ">
                    <div class="feat_card p-4">
                        <div class="card_body ">
                            <div class="card_text px-3 pt-5">
                                <i class="fa-solid fa-stopwatch fa-xl mb-5"></i>
                                <p style="font-size: 2em;">Online Marketing</p>
                                <p> Far far away, behind the word mountains, far from the countries Vokalia Separated..</p>
                            </div> <!--end card_text-->
                        </div> <!--end card body-->
                    </div> <!--end feat_card-->
                </div> <!--end featcard_container-->
            </div> <!--end features-->
        </section>
        <section style="background-color: #fafafa; margin-top: 4em; height: 1400px">
            <div class="mission">
                <div class="miss_text p-2">
                    <p style=" font-size: 3em;">Learn more about our <span>missions</span></p>
                    <img src="/divider.svg" alt="">
                    <p style="margin-top: 1.5em;"> Far far away, behind the word mountains, far from the countries Vokalia
                        and
                        Consonantia, there live
                        the blind texts. Separated they lived in Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean. Separated they live in Bookmarksgrove.
                    </p>
                    <div class="button_view purchase-button mt-5 mb-5">
                        <a href="#"> READ MORE</a>
                    </div>
                </div> <!--end miss text-->
                <div class="misscard_container">
                    <div class="box_card box_man">
                        <div class="colored" style="height: 400px;"></div>
                    </div>
                    <div class="box_woman box_card overlay">
                        <img src="/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
                    </div>
                </div> <!--end miss card container-->
            </div> <!--end mission-->
        </section>
        <section>
            <div class="projects">
                <div class="projects_text">
                    <img src="/divider.svg" alt="">
                    <p style=" font-size: 2em; font-weight: 700; margin-top: 1.2em  ; margin-bottom: 1.2em;">
                        Our recent <span>web designs</span> & some examples of past <span>projects</span>
                    </p>
                    <img src="/divider.svg" alt="">
                    <p style="margin-top: 1.5em;">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                        the blind texts. Separated they lived in Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean. Separated they live in Bookmarksgrove.
                    </p>
                </div> <!--end projects text-->
                <div class="project_container ">
                    <div class="row mt-3 row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                        <div class="col" v-for="(design, index) in webDesigns" :key="index">
                            <div class="card card-design" :style="{ backgroundImage: design.image }">
                                <div class="info-card">
                                    <h4 class="col-title"><a href="#">{{ design.title }}</a></h4>
                                    <div class="entry-content">
                                        <span v-for="(scope, scopeIndex) in design.scope" :key="scopeIndex">{{ scope
                                        }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> <!--row-->
                </div> <!--end project container-->
                <div class="d-flex justify-content-center">
                    <div class="button_view purchase-button mt-5 mb-5">
                        <a href="#"> READ MORE</a>
                    </div>
                </div>
            </div> <!--end projects-->
        </section>
        <section style="background-color: #f4f4f4; margin-top: 4em; height: 1400px">
            <div class="user_container">
                <div class="numbers">
                    <div class="colored d-flex flex-column align-items-center">
                        <div class="colored_text mt-5">
                            <div>
                                <p>280</p>
                                <h4 style="text-align: center; color: #f4f4f4; font-size: 1em;">PROJECTS</h4>
                                <p style="font-size: 2.5em;">+3,500</p>
                                <h4 style="text-align: center; color: #f4f4f4; font-size: 1em;">USERS' COMMENTS</h4>
                                <div class="vl d-none d-md-block "></div>
                                <p style="font-size: 2.5em; margin-left: 0.5em;">100%</p>
                                <h4 style="text-align: center; color: #f4f4f4; font-size: 1em;">HAPPY CLIENTS</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" text_love p-5">
                    <p style=" font-size: 3em;"> We <span>Love</span> What We Do</p>
                    <img src="/divider.svg" alt="">
                    <p style="margin-top: 1.5em;">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live
                        the blind texts. Separated they lived in Bookmarksgrove right at the coast of the
                        Semantics, a large
                        language ocean. Separated they live in Bookmarksgrove.
                    </p>
                    <div class="checked">
                        <i class="fa-solid fa-check me-2" style="color: #1cd595;">
                        </i>
                        <span style="color: #000000; font-weight: lighter;">far far away, behind mountains
                        </span>
                    </div>
                    <div class="checked">
                        <i class="fa-solid fa-check me-2" style="color: #1cd595;">
                        </i>
                        <span style="color: #000000; font-weight: lighter;">large language ocean
                        </span>
                    </div>
                    <div class="checked">
                        <i class="fa-solid fa-check me-2" style="color: #1cd595;">
                        </i>
                        <span style="color: #000000; font-weight: lighter;">far from the countries
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section style="background-color: #f9f9f9;margin-bottom: 30px; padding: 6em 5em;">
            <div class=" plan">
                <div class="text_plan d-flex flex-column justify-content-between">
                    <p id="elegant"> With <span>Live Chat 24/7</span> Support
                    </p>
                    <div style="text-align: center; ">
                        <img src="/divider.svg" alt="">
                    </div>
                    <p style="margin-top: 1.5em;">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live
                        the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.
                    </p>
                </div>
                <div class="plan_container mt-4">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card" style="border-radius: 20px; ">
                                <div class="card-header p-0" style="background-color: #2d2d2d;">
                                    <div class=" designing mt-3">
                                        <p
                                            style="text-align: center; font-size: 1.8em; font-weight: 700; margin-bottom: 0;">
                                            DESIGNING
                                        </p>
                                        <h6 style="text-align: center; font-size: 0.9em ">
                                            All Designs
                                        </h6>
                                    </div>
                                    <div class="price" style="color: #ffffff;">
                                        <p style="text-align: center; font-size: 3em; margin:0 auto;">
                                            <span style="color: #ffffff; font-size: 0.7em;">$</span>
                                            10
                                            <span style="color: #ffffff; font-size: 0.5em;">
                                                / DESIGN
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="card-body d-flex flex-column align-items-center mt-4">
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Creative Design
                                            Enabled
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Vibrant Color Usage
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Eye Catching Design
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Extreme Typography
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Exceptional Design
                                        </span>
                                    </div>
                                </div> <!--end card body-->
                            </div> <!--card-->
                        </div> <!--end col-->
                        <div class="col">
                            <div class="card" style="border-radius: 20px;">
                                <div class="card-header p-0"
                                    style="background-image: linear-gradient(to right, #8ddc63, #1cd595);">
                                    <div class=" designing mt-3">
                                        <p
                                            style="text-align: center; font-size: 1.8em; font-weight: 700; margin-bottom: 0;">
                                            DEVELOPMENT
                                        </p>
                                        <h6 style="text-align: center; font-size: 0.9em ">
                                            WordPress Projects
                                        </h6>
                                    </div>
                                    <div class="price" style="color: #ffffff;">
                                        <p style="text-align: center; font-size: 3em; margin:0 auto;">
                                            <span style="color: #ffffff; font-size: 0.7em;">$</span>
                                            15
                                            <span style="color: #ffffff; font-size: 0.5em;">
                                                / DESIGN
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="card-body d-flex flex-column align-items-center mt-4">
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Creative Design
                                            Enabled
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Vibrant Color Usage
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Eye Catching Design
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Extreme Typography
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Exceptional Design
                                        </span>
                                    </div>
                                </div> <!--end card body-->
                            </div> <!--card-->
                        </div> <!--end col-->
                        <div class="col">
                            <div class="card" style="border-radius: 20px;">
                                <div class="card-header p-0" style="background-color: #2d2d2d;">
                                    <div class=" designing mt-3">
                                        <p
                                            style="text-align: center; font-size: 1.8em; font-weight: 700; margin-bottom: 0;">
                                            SEO
                                        </p>
                                        <h6 style="text-align: center; font-size: 0.9em ">
                                            Web Products
                                        </h6>
                                    </div>
                                    <div class="price" style="color: #ffffff;">
                                        <p style="text-align: center; font-size: 3em; margin:0 auto;">
                                            <span style="color: #ffffff; font-size: 0.7em;">$</span>
                                            10
                                            <span style="color: #ffffff; font-size: 0.5em;">
                                                / DESIGN
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="card-body d-flex flex-column align-items-center mt-4">
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Creative Design
                                            Enabled
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Vibrant Color Usage
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Eye Catching Design
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Extreme Typography
                                        </span>
                                    </div>
                                    <div class="checked">
                                        <i class="fa-solid fa-check me-2" style="color: #000000;">
                                        </i>
                                        <span style="color: #000000; font-weight: lighter;">Exceptional Design
                                        </span>
                                    </div>
                                </div> <!--end card body-->
                            </div> <!--card-->
                        </div> <!--end col-->
                    </div> <!--row-->
                </div> <!--end plan container-->
            </div> <!--end plan-->
        </section>
        <section class="jumbo p-0">
            <div class="j_colored p-3">
                <div class="jumbo_container pt-5 d-flex flex-column justify-content-center align-items-center">
                    <div class="jumbo_text p-3" style="text-align: center;">
                        <i class="fa-solid fa-quote-left mb-3" style="color: #63E6BE; font-size: 4.6em;"></i>
                        <p style="font-size: 1.5em; color: #f4f4f4;">
                            When it comes to barbequing, there are two main schools of thought for the techniques that you
                            can use. Freshly scrambled eggs with applewood smoked bacon - are amazing!
                        </p>
                    </div> <!--jumbo text-->
                    <div class="jumbo_user p-4 d-flex flex-column align-items-center">
                        <div class="woman mb-4">
                        </div>
                        <p style="font-size: 1.7em; color: #00d9a6; margin-bottom: 0;">LISSA DURBIN</p>
                        <h4 style="font-size: 1em; color: #f4f4f4;">Client</h4>
                    </div> <!--jumbo user-->
                </div> <!--end jumbo container-->
            </div> <!--end j colored-->
        </section> <!--end jumbo-->
        <section style="margin-bottom: 500px;">
            <div class="blog d-flex flex-column justify-content-between">
                <div class="blog_text d-flex flex-column align-items-center">
                    <p id="elegant">Latest News & Our<span> Blog</span>
                    </p>
                    <div style="text-align: center; ">
                        <img src="/divider.svg" alt="">
                    </div>
                </div>
                <div class="blog_container mt-4">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card mb-5">
                                <img src="/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg"
                                    class="card-img-top" alt="...">
                                <div class="card_alex p-4">
                                    <p style="color: #aaaaaa; margin: 0; font-size: 0.8em"> May 24, 2018 by Alex </p>
                                    <h5><span style="font-size: 1.1em;">&#8226;</span> Marketing Ideas</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-5">
                                <img src="/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg" class="card-img-top"
                                    alt="...">
                                <div class="card_alex p-4">
                                    <p style="color: #aaaaaa; margin: 0; font-size: 0.8em"> May 24, 2018 by Alex </p>
                                    <h5><span style="font-size: 1.1em;">&#8226;</span> Rest During Working Hours </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-5">
                                <img src="/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg" class="card-img-top"
                                    alt="...">
                                <div class="card_alex p-4">
                                    <p style="color: #aaaaaa; margin: 0; font-size: 0.8em"> May 24, 2018 by Alex </p>
                                    <h5><span style="font-size: 1.1em;">&#8226;</span> Develop Your Startup Idea </h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="purchase-button posts mt-5 mb-5">
                        <a href="#"> VIEW ALL POSTS</a>
                    </div>
                </div>
            </div> <!--blog-->
        </section>
    </main>
</template> 

<style lang="scss" scoped>
@use '../styles/home.scss';


// BUTTON PERSONALISATION
.purchase-button {
    position: relative;
    overflow: hidden;
    border: none;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
}

.purchase-button:before {
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

.purchase-button.posts:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 0%;
    background: -webkit-radial-gradient(circle, #8ddc63, #1cd595 70%);
    background: radial-gradient(circle, #8ddc63, #1cd595 70%);
    transition: width 0.3s ease-out;
    border-radius: 10rem;
    z-index: -1;
}

.purchase-button:hover:before {
    width: 100%;
    height: 100%;
}
</style>
