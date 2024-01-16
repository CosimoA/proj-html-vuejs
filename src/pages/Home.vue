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
        <div class="container">
            <div class="slider-wrapper p-2" tabindex="0" style="/* background-color: brown; */">
                <div class="item p-2" style="/* background-color: rgb(207, 107, 13); */">
                    <div class="text">
                        <h2>17 YEARS OF EXPERIENCE</h2>
                        <h1>{{ slides[activeItem].title }} <br><span>{{ slides[activeItem].title_col }}</span></h1>
                        <img src="/divider.svg" alt="">
                        <p>
                            {{ slides[activeItem].text }}
                        </p>
                        <div class="read">
                            <a href="#"> READ MORE</a>
                        </div>
                    </div> <!--end text-->
                    <div class="img">

                    </div>
                </div> <!-- end item-->
            </div> <!--end slider-wrapper-->
        </div> <!--end container-->
    </main>
</template> 

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

h2 {
    color: #76db6a;
    font-weight: normal;
    font-size: 1.5em;
    word-spacing: 0.5em;
}

h1 {
    font-size: 3.5em;
}

span {
    color: #00d4a2;
}

.item {
    @include flex (wrap_b)
}

.read {
    background-color: black;
    border-radius: 2em;
    padding: 0.6em;
    text-align: center;
    width: 10em;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.3s ease;
}

.read:hover {
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
</style>
