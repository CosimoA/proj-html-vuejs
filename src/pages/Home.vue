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
                <div class="slider-wrapper pt-5 px-5 " tabindex="0">
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
    </main>
</template> 

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

h2 {
    color: #76db6a;
    font-weight: normal;
    font-size: 1.3em;
    word-spacing: 0.3em;
}

h1 {
    font-size: 2.9em;
    font-weight: bold;
}

span {
    color: #00d4a2;
}

.item {
    @include flex (wrap_b)
}

.button_read {
    background-color: #323232;
    border-radius: 2em;
    padding: 0.6em;
    text-align: center;
    width: 10em;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.3s ease;
}

.button_read:hover {
    cursor: pointer;
    background-color: #00d9a6;
    filter: brightness(110%);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #00d9a6;
    transform: scale(0.9)
}

a {
    text-decoration: none;
    color: white;
    font-size: 0.9em;
    box-shadow: 1em;
}

li a {
    color: black;
    font-weight: 450;
    padding: 0.6em;
}

li a:hover {
    color: #00d4a2;
    cursor: grab;
}

.prev,
.next {
    width: 3em;
    height: 3em;
    margin: 10px 0;
    border-radius: 50%;
    background: #ccc;
    // position: absolute;
    cursor: pointer;
}

.prev:hover {
    background-color: #00d4a2;
}

.next:hover {
    background-color: #00d4a2;
}

.item_img {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

}

.item_img img {
    width: 90%;
}


// // MEDIA QUERY

// // Tablet
// @media all and (min-width: 767px) {
//     .container {
//         max-width: 767px;
//     }

//     .item_img {
//         flex-direction: row-reverse;
//         justify-content: space-between;
//         align-items: center;

//     }

// }

// // Desktop
// @media all and (max-width: 1024px) {
//     .container {
//         max-width: 1024px;
//     }
// }
</style>
