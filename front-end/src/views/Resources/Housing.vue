<template>
    <div id="housing">
        <div id="orange">
            <h4><router-link to="/resources">&lt; Return to Resources</router-link></h4>
            <h1>
                Step 1: FIGURE OUT WHAT YOU CAN AFFORD 
            </h1>
            <p>
                Review personal finances and figure out how much you would need to save for a down payment, usually between 5%-20% of the house price. Keep track of your credit score, the better the score the easier it will be to get approved for a loan. 
            </p>
            <h1>
                Step 2: RESEARCH THE MARKET
            </h1>
            <p>
                Monitor the location in which you want to buy a house and pay attention to the length of time that homes in your price range stay on the market and if there are any major shifts in asking price. 
            </p>
            <h1>
                Step 3: GO THROUGH THE PRE-APPROVAL PROCESS 
            </h1>
            <p>
                Speak with a lender to determine a specific house budget number. To get pre-approved for a mortgage, you will have to provide the lender with information such as your debts and assets. 
            </p>
            <h1>
                Step 4: LIST YOUR PRIORITIES
            </h1>
            <p>
                After knowing how much you can afford, you can finally begin searching for homes in your area of interest. Make sure you know what you are looking for in a home and prioritize them.
             </p>
            <h1>
                Step 5: FIND AN AGENT
            </h1>
            <p>
                An agent can help you find homes and negotiate prices that fit within your budget.
            </p>
            <h1>
                Step 6: MAKE AN OFFER AND NEGOTIATE 
            </h1>
            <p>
                One of the most important steps when buying a home is inspecting it. By doing, this you will become aware of any damage and possibly save yourself thousands of dollars. Once you decided the house is in good shape, secure your loan with a bank or lender.
            </p>
            <h1>
                Step 7: HANDLE INSPECTIONS AND SECURE A LOAN  
            </h1>
            <p>   
                One of the most important steps when buying a home is inspecting it. By doing, this you will become aware of any damage and possibly save yourself thousands of dollars. Once you decided the house is in good shape, secure your loan with a bank or lender.              
            </p>
            <h1>
                Step 8: SUBMIT PAPERWORK AND CLOSE 
 
            </h1>
            <p>   
                Once the seller is paid and all the paperwork has been filled out and processed with your agent and lender, you can finally move into your new house.
            </p>
            <h1>
                HIDDEN COSTS
            </h1>
            <ul>
                <li>
                    <h3>
                        Before moving in you will have to pay fees for your mortgage loan, a house inspection, and closing costs. 

                    </h3>
                </li>
                <li>
                    <h3>
                        You will have to pay a loan origination fee to your lender to cover the cost and work involved in preparing your mortgage loan. This fee can be between .5 and 1 percent of the total value of your home. 
                    </h3>
                </li>
                <li>
                    <h3>
                        Working with an agent means they will earn commission when the house is sold. You are basically paying the agent a fee that gets absorbed into the cost of the home. 
                    </h3>
                </li>
                <li>
                    <h3>
                        Closing costs may vary between 2 and 5 percent of the value of your home 
                    </h3>
                </li>
                <li>
                    <h3>
                        You will have to pay for home insurance and utilities too. 
                    </h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default ({
    name: "Hosuing"
})
</script>


<style scoped>
    #housing{
        margin-top: 0%;
        background-color: #F47521;

    }
    
    #orange {
        margin-top: 0%;
        padding: 3%;
        padding-left: 15%;
        padding-right: 15%;
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

    li{
        text-align: left;
    }
</style>