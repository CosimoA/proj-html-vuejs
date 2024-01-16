<script>
export default {
    name: "AppFooter"
}

</script>

<template>
    <header>
        <div class="container">
            <div class="top-footer">
                <div class="row">
                    <div class="col">
                        <div class="icon-container">
                            <a href="#"><img src="/group-logo.png" alt="logo gruppo"></a>
                        </div>
                        <div class="text-container">
                            <p>While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.While the lovely valley teems with vapour around me.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="title-container">
                            <h2>QUICk LINKS</h2>
                            <img src="/divider.svg" alt="divider" class="divider">
                        </div>
                        <div class="text-container">
                            <ul>
                                <li><a href="#">Careers</a> </li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Terms of use</a></li>
                                <li><a href="#">Privacy Projects</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="title-container">
                            <h2>CONTACT</h2>
                            <img src="/divider.svg" alt="divider" class="divider">
                        </div>
                        <div class="text-container">
                            <p>Patricia C. Amedee 4401 Waldeck Street <br> Grapevine Nashville, TX 76051</p>
                            <br>
                            <p>info@yourdomain.com</p>
                            <br>
                            <p>+99 (0) 101 0000 888</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="title-container">
                            <h2>LOCATION ON MAP</h2>
                            <img src="/divider.svg" alt="divider" class="divider">
                        </div>
                        <div class="map-container">
                            <img src="/map-footer.png" alt="google map">
                        </div>
                    </div>
                </div>
            </div>
            <div class="bot-footer">
                <small>© 2024 PHLOX BUSINESS THEME.</small>
                <ul>
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                </ul>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.top-footer{
    padding: 5rem 2rem;
    color: $text-dark-gray;
    line-height: 1.5rem;
    .row{   
        display: flex;
        flex-direction: column;
        .col{
            width: 100%;
            margin-bottom: 3rem;
            
            h2{
                margin-bottom: 1.5rem;
            }

            .divider{
                margin-bottom: 1.5rem;
                width: 4.5rem;
            }

            ul{
                list-style-type: none;
                li{
                    a:hover{
                        color: $green;
                    }
                }
            }

        }
    }
}
.bot-footer{
    background: linear-gradient(to right, #444444, #191919);
    color: $text-light-gray;
    padding: 2.5rem;
    line-height: 2rem;
    font-weight: 500;

    ul{ 

        li{
            
            display: inline;
            margin: .8rem;
            a{
                color: $text-light-gray;
            }
        }
    }
}

img{
    max-width: 100%;
}

a {
    color: $text-dark-gray;
    text-decoration: none;
}

</style>  