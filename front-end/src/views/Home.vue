<template>
  <div>
    <div id="top">
        <h1>
            Who We Are?
        </h1>
        <h2>
            We provide free financial education to the Wentworth Community. Our goal is to help students become more financially 
            aware and independent. To aid you in becoming more financially savvy; LeopardCents offers 1 on 1 meetings, a podcast, 
            blog posts, and helpful tips for budgeting, taxes, loan repayment, savings and more. 
        </h2>
    </div>
    <table>
        <tbody>
            <tr>
                <th>
                    <div id="left">
                        <ul>
                            <li>
                                <h3>
                                    Send Us A Message
                                </h3>
                            </li>
                            <li>
                                <p>
                                Our Team is available Mondays-Friday from 8AM-5PM. Feel free to contact us at anytime and we will get back
                                to you as soon as we can!
                                </p>
                            </li>
                            <li>
                                <button>
                                   <router-link to="/contact-us"> Contact Us </router-link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div id="mid">
                        <ul>
                            <li>
                                <h3>
                                    Socials
                                </h3>
                            </li>
                            <li>
                                <p>
                                    Checkout our Instagram, Podcast, and Twitter for all our latest posts and updates!
                                </p>
                            </li>
                            <li>
                                <button>
                                    <router-link to="/socials"> Socials </router-link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div id="right">
                        <ul>
                            <li>
                                <h3>
                                    Student Service Center
                                </h3>
                            </li>
                            <li>
                                <p>
                                    Any questions regarding Wentworth billing or financial aid processing cannot be answered by us. 
                                    Use the button below to return to the official SSC website.
                                </p>
                            </li>
                            <li>
                                <button>
                                   <a href="https://www.wit.edu/ssc"> Return to SSC </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </th>
            </tr>
        </tbody>
    </table>
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
    }

    table {
    margin-top: -19px;
    margin-left: -6px;
    padding:-10px;
    display: flex;
    }

    #top {
        background-color:  #05B13F;
        height: 550px;
        margin-top: 0%;
        padding: 3%;
        padding-left: 18%;
        padding-right: 18%;
    }

    button {
        background-color:  #05B13F;
        border: 5px solid #05B13F;
        border-radius: 5px;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        color: white;
        font-size: 18px;

    }

    h1 {
        color: white;
        font-size: 40px;
        text-align: center;   
        padding: 8%;
        font-family:sans-serif
    }

    h2{
        color: white;
        font-size: 26px;
        text-align: center;
        line-height: 30px;
        word-spacing: 8px;

    }

    li {
        display: inline-flex;
        vertical-align: middle;
        align-content: center;
        margin-left: -5px;
    }

    h3 {
        color: white;
        text-align: center;
        padding-top: 35px;
        font-size: 28px;
    }

    button {
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
    }

    p {
        color: white;
        font-size: 24px;
        text-align: center;
        padding-left: 8%;
        padding-right: 8%;
    }

    #left {
        background-color: #F47521;
        height: 440px;
        width: 505px;
    }

    #mid {
        background-color: #FDB913;
        height: 440px;
        width: 505px;

    }

    #right {
        background-color: #E7202B;
        height: 440px;
        width: 505px;
    }

</style>
