<template>
     <div id="container">
            <h2>
                Socials
            </h2>
            <div id="twitter">
                <img src="../assets/twitter-logo.png" width="200" height="200" alt="Twitter Logo" id="twitter-logo"/>
                <a class="twitter-timeline" href="https://twitter.com/WIT_SSC?ref_src=twsrc%5Etfw" data-width="60%" data-height="400">
                    Twitter
                </a> 
                <div id="twitter-embed"></div>
                <br>
                <br>
                <br>
            </div>
            <div id="apple">
                <img src="../assets/apple-logo.png" width="200" height="200" alt="Spotify Logo" id="apple-logo"/>
                <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="400" id="aplple-emb" style="width:60%;max-width:100%;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/educated-spending/id1518317099"></iframe>
            </div>
        </div>
</template>

<script>
    /* eslint-disable no-useless-escape */
import postscribe from 'postscribe'

    export default ({
        name: "Social",
        mounted: function () {
            postscribe('#twitter-embed', `<script src="https://platform.twitter.com/widgets.js"><\/script>`)
        }
    })
</script>


<style scoped>

#container {
    margin-top: 0%;
    padding: 3%;
    background-color: white;

}

h2 {
    font-size: 36px;
    color: black;
    text-align: center;
    font-family:monospace;
    padding-bottom: 40px;
}

#twitter{
    margin-left:15%;
    margin-right: auto;
    display: block;
}

.twitter-timeline{
    margin-left: auto;
}

#twitter-logo{
    padding-right: 10%;
    vertical-align: top;
    margin-top: 50px;
}

#apple{
    padding-top: 50px;
    margin-left: 15%;
    margin-right: auto;
    display: block;
}

#apple-emb{
    margin-left: auto;
}

#apple-logo{
    padding-right: 10%;
    vertical-align: top;
    margin-top: 50px;
}

@media screen and (max-width: 875px) {
    h2{
        padding-bottom: 5px;
    }

    #twiiter{
        display: block;
        margin-left: 45%;
        margin-top: -20px;
        
    }

    #twitter-logo{
        margin-left: 25%;
        margin-top: -20px;

    }

    .twitter-timeline{
        margin-left: 16%;
    }

    #apple{
        display: block;
        padding-top: 0px;
        margin-left: 30%;

    }

    #apple-emb{
        margin-left: 20%;
        max-width: 100%;
    }
    
    #apple-logo{
        margin-top: 2px;
        margin-left: 15%;
        padding-bottom: 50px;
    }
}

@media screen and (max-width: 650px) {
    #twiiter{
        display: block;
        margin-left: 15%;
        align-items: center;
    }

    #twitter-logo{
        display: block;
        width: 60%;
        height: 50%;
        margin-left: 15%;
    }

    .twitter-timeline{
        margin-left: 15%;
        margin-right: 15%;
    }

    #apple{
        display: block;
        margin-left: 28%;
        align-items: center;
    }

    #apple-logo{
        display: block;
        width: 50%;
        height: 50%;
        margin-left: 7%;
        padding-bottom: 60px;
    }

    #apple-emb{
        margin-left: 10%;
        float: none;
        width: 100%;
    }
}

</style>