<template>
    <div id="credit">
        <div id="orange">
            <h4><router-link to="/resources">&lt; Return to Resources</router-link></h4>
            <h1>
                Credit Report
            </h1>
            <p>
                Check your credit report for for free from all three credit bureaus at
                <a href="https://wwww.anualcreditreport.com">www.annualcreditreport.com</a>
                to make sure there aren't any discrepancies within your credit file!
            </p>
            <br>
            <h1>
                Credit Score
            </h1>
            <p>
                Before borrwoing money from any financial institution or obtaining a new credit
                card, it would best to first check your credit score. There are two different credit
                models that lenders look at to determine your approval for a loan and interest rate.
                You can check your FICO credit score at <a href="https://www.discover.com">www.discover.com</a> for free and your Vantage Score
                for free at <a href="https://www.creditkarma.com">www.creditkarma.com</a>
            </p>
        </div>
    </div>
</template>

<script>
export default ({
    name: "Credit"
})
</script>

<style scoped>
    
    #credit {
        margin-top: 0%;
        text-align: left;
    }
 
    
    #orange {
        margin-top: 0%;
        padding: 3%;
        padding-left: 15%;
        padding-right: 15%;
        height: 625px;
        background-color: #F47521;

    }
    
    a{
        color:blue;
    }
    
    h1{
        font-size: 24px;
        text-align: left;
    }

    p{
        font-size: 18px;
        text-align: left;
        margin-left: 30px;
    }

    h4{
        text-align: left;
        margin-left: -20px;
        font-size: 20px;

    }
</style>