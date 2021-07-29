<template>
    <div id="investing">
        <div id="orange">
            <h4><router-link to="/resources">&lt; Return to Resources</router-link></h4>
            <h1>
                Step 1: HOW MUCH MONEY ARE YOU WILLING TO INVEST? 
            </h1>
            <p>
                Look at all the expenses you have and try to figure out how much money you have at the end of every month and decide how much of it you are willing to invest. 
            </p>
            <h1>
                Step 2: LEARN ABOUT THE STOCK MARKET
            </h1>
            <p>
                You probably want to jump right on in into buying and trading stocks, but to be successful, you first have to expand your knowledge. Read books, articles, take classes, and or watch videos to help you understand how investing works. 
            </p>
            <h1>
                Step 3: SET GOAL
            </h1>
            <p>
                What do you want to gain from investing? Do you want to invest long-term with low-risk? Or do you want to invest with high-risk and high return? Figure out what you're going to invest in, and what you're investing for. 
            </p>
            <h1>
                Step 4: CHOOSE YOUR MODE OF INVESTING
            </h1>
            <p>
                There are multiple ways in which you could invest. You could buy and trade stocks on your own, you could use an automated investment app, you could even go to a full­service brokerage firm to invest your money. 
            </p>
            <h1>
                Step 5: CHOOSE YOUR INVESTMENTS
            </h1>
            <p>
                Now that you have built a strong investing foundation you can finally start your investment portfolio. Based on your answers to step three you might focus on US stocks or you might mainly focus on municipal bonds. 
            </p>
            <h1>
                Step 6: KEEP EMOTIONS UNDER CONTROL
            </h1>
            <p>
                Investing always comes with risk, but you can't be successful if you let fear and or greed control you. If you let fear get the best of you, you might sell too early and not make enough. If you hold onto an investment too long, thinking it will go up even more, you could potentially lose even more. Keep emotions disciplined. 
            </p>
            <h1>
                Step 7: REVIEW AND ADJUST
            </h1>
            <p>
                You are going to make mistakes as a first-time investor and that's okay. What is going to make you successful is being able to accept and evaluate your mistakes in order to make smarter choices the next time around. Review your portfolio and see what forms of investing are working out for you and which ones you might want to stay away from. 
            </p>
        </div>
    </div>
</template>

<script>
export default ({
    name: "Investing"
})
</script>

<style scoped>
    
    #investing {
        margin-top: 0%;
        background-color: #F47521;

    }
    #orange {
        margin-top: 0%;
        padding: 3%;
        padding-left: 18%;
        padding-right: 18%;
    }
    
    h1{
        font-size: 24px;
        text-align: left;
    }

    p{
        font-size: 18px;
        text-align: left;
        margin-left: 30px;
        padding-bottom: 15px;
    }

    h4{
        text-align: left;
        margin-left: -20px;
        font-size: 20px;
    }
</style>