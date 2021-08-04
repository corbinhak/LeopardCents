<template>
  <div id="container">
       <body>
        <div id="top">
            <h2>
                Who We Are?
            </h2>
            <h3> 
                We provide free financial education to the Wentworth Community. Our goal is to help students become more financially 
                aware and independent. To aid you in becoming more financially savvy; LeopardCents offers 1 on 1 meetings, a podcast, 
                blog posts, and helpful tips for budgeting, taxes, loan repayment, savings and more. 
            </h3>
        </div>
        <div id="bottom">
            <div id="left">
                <ul>
                    <li id="h-li">
                        <h4>
                           Send Us A Message
                        </h4>
                    </li>
                    <li id="h-li">
                        <p id="h-p">
                            Our Team is available Mondays-Friday from 8AM-5PM. Feel free to contact us at anytime and we will get back
                            to you as soon as we can!
                        </p>
                    </li>
                    <br>
                    <li id="h-li">
                        <button id="blink">
                            <router-link to="/contact-us"> 
                                Contact Us
                            </router-link>
                        </button>
                    </li>
                </ul>
            </div>
            <div id="mid">
                <ul>
                    <li id="h-li">
                        <h4>
                            Socials
                        </h4>
                    </li>
                    <li id="h-li">
                        <p id="h-p">
                            Checkout our Instagram, Podcast, and Twitter for all our latest posts and updates!
                        </p>
                    </li>
                    <br>
                    <li id="h-li">
                        <button id="blink">
                            <router-link to="/socials"> 
                                Our Socials
                            </router-link>
                        </button>
                    </li>
                </ul>
            </div>
            <div id="right">
                <ul>
                    <li id="h-li">
                        <h4>
                            Student Service Center
                        </h4>
                    </li>
                    <li id="h-li">
                        <p id="h-p">
                            Any questions regarding Wentworth billing or financial aid processing cannot be answered by us. 
                            Use the button below to return to the official SSC website.
                        </p>
                    </li>
                    <br>
                    <li id="h-li">
                        <button id="blink">
                            <a href="https://wit.edu/admissions/student-services">
                                Return to SSC
                            </a>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </body>
  </div>
</template>

<script>

export default ({
   name: "Home"
})

</script>

<style scoped>
body, html {
    margin: 0px;
    padding: 0px;
    width: 100%;
}

#top {
    background-color:  #05B13F;
    margin-top: 0%;
    padding: 3%;
    padding-left: 18%;
    padding-right: 18%;
}

#bottom {
    display: flex;
    flex-direction: row;
    width: 100%;
}

h2 {
    color: white;
    font-size: 40px;
    text-align: center;   
    padding-top: 3%;
    padding-bottom: 7%;
    font-family:sans-serif,

} 

h3{
    color: white;
    font-size: 26px;
    text-align: center;
    line-height: 40px;
    word-spacing: 8px;
}

#h-li {
    display: inline-flex;
    vertical-align: top;
}

h4 {
    color: white;
    text-align: center;
    padding-top: 0px;
    font-size: 28px;
    margin-left: -5%;
    margin-right: 4%;
}

#blink {
    color:white;
    background-color: black;
    width: 220px;
    height: 40px;

    border: 5px solid black;
    border-radius: 3px;
    text-align: center;
    vertical-align: middle;
    font-size: 24px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 40px;
    margin-right: 6%;
}


#h-p {
    color: white;
    font-size: 24px;
    text-align: center;
    padding-left: 6%;
    padding-right: 8%;
    padding-bottom: 30px;
}


#left {
    background-color: #F47521;
    width: 100%;
    text-align: center;
}

#mid {
    background-color: #FDB913;
    width: 100%;
    text-align: center;
}

#right {
    background-color: #E7202B;
    width: 100%;
    text-align: center;
}

@media screen and (max-width: 800px) {
    #bottom {
        flex-direction: column;
        display: table-row;
    }

    #left {
        margin-top: -34px;
    }

    #mid {
        margin-top: -34px;
    }

    #right {
        margin-top: -34px;
    }


}

</style>
