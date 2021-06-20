<template>
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
                        <h3>
                            Send Us A Message
                        </h3>
                        <p>
                            Our Team is available Mondays-Friday from 8AM-5PM. Feel free to contact us at anytime and we will get back to you as soon as we can!
                        </p>
                    </div>
                </th>
                <th>
                    <div id="mid">
                        <h3>
                            Socials
                        </h3>
                        <p>
                            Checkout our Instagram, Podcast, and Twitter
                        </p>
                    </div>
                </th>
                <th>
                    <div id="right">
                        <h3>
                            Student Service Center
                        </h3>
                        <p>
                            Any questions regarding Wentworth billing or financial aid processing cannot be answered by us. 
                            Use the button below to return to the official SSC website.
                        </p>
                    </div>
                </th>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default ({
   name: "HomePage"
})
    </script>

<style scoped>
    body, html {
        margin: 0px;
        padding: 0px;
    }

    #top {
        background-color:  #05B13F;
        height: 470px;
        margin-top: 0%;
        padding: 3%;
        padding-left: 15%;
        padding-right: 15%;
    }

    h1 {
        color: white;
        size: 24px;
        text-align: center;   
        padding: 8%;
        font-family:sans-serif
    }

    h2{
        color: white;
        size: 18px;
        text-align: center;
    }

    li {
        display: inline-flex;
    }

    h3 {
        color: white;
        size: 18px;
        text-align: center;
    }

    p {
        color: white;
        size: 14px;
        text-align: center;
    }

    #left {
        background-color: #F47521;
        height: 250px;
        width: 375px;
    }

    #mid {
        background-color: #FDB913;
        height: 250px;
        width: 375px;
    }

    #right {
        background-color: #E7202B;
        height: 250px;
        width: 375px;
    }

</style>
