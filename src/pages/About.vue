<script>
export default {
    name: "About"
} 
</script> 

<template>
    <main>
        <div>
            <section class="header-title">
                <h1>About Page</h1>
            </section>
            <section class="about-jumbo">

                <div class="container-img">
                    <div class="overlay"></div>

                    <img src="../assets/woman-photographer-drinking-coffee-and-working-PJNBP6U-858x632.jpg"
                        alt="Profile of attractive charming curly young woman photographer drinking coffee and working with laptop on workplace">
                </div>

                <div class="container-info">
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

                    <div class="container-bar">
                        <div class="bar">
                            <img src="/divider.svg" alt="divider">
                        </div>
                    </div>

                    <div class="container-paragraf">
                        <p class="paragraf">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean.Separated they live in Bookmarksgrove.
                        </p>
                    </div>

                    <div class="container-button">
                        <div>
                            <button class="button">
                                <span>PURCHASE</span>
                            </button>
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

                .button {
                    display: block;
                    padding: 18px 45px;
                    border-radius: 100em;
                    color: #fff;
                    text-transform: uppercase;
                    position: relative;
                    overflow: hidden;
                    background-image: linear-gradient(to right, #8ddc63, #1cd595);
                    box-shadow: 6px 6px 25px 0 rgba(0, 217, 166, .35);
                    text-shadow: 0 0 10px rgba(0, 0, 0, .04);
                    border: none;
                    width: 156px;
                    height: 52px;
                    font-size: .75em;
                    font-weight: bold;
                    cursor: pointer;
                    z-index: 1;
                    align-self: center;


                    &:before {
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

                    &:hover:before {
                        width: 100%;
                        height: 100%;
                    }
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


}
</style>