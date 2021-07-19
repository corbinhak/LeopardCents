<template>
    <div id="credit">
        <div class="orange">
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
    .orange {
        margin-top: 0%;
        padding: 3%;
        padding-left: 18%;
        padding-right: 18%;
        padding: 3%;
        background-color: #F47521;
        text-align: left;
        height: 525px;
    }
    
    h1, p {
        text-align: left;
    }
</style>