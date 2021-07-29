<template>
    <div id="loans">
        <div class="yellow">
            <h4><router-link to="/resources">&lt; Return to Resources</router-link></h4>
            <h1>
                Student Loan Repayment Options
            </h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Term of Loan</th>
                </tr>
                <tr>
                    <th>Standard Repayment</th>
                    <th>10 years</th>
                </tr>
                <tr>
                    <th>Graduated Repayment</th>
                    <th>10 - 30 years</th>
                </tr>
                <tr>
                    <th>Extended Repayment</th>
                    <th>25 years</th>
                </tr>
                <tr>
                    <th>Revised Pay As You Earn (REPAYE) *</th>
                    <th>20 years</th>
                </tr>
                <tr>
                    <th>Pay As You Earn (PAYE) *</th>
                    <th>20 years</th>
                </tr>
                 <tr>
                    <th>Income Based Repayment(IBR) *</th>
                    <th>20 years</th>
                </tr>   
                <tr>
                    <th>Income Contingent Repayment(ICR) *</th>
                    <th>25 years</th>
                </tr>   
            </table>
            <p>
                *Qualifications dependent on income.
            </p>
            <br>
            <h1>
                Differences Between IBR's
            </h1>
            <table>
                <tr>
                    <th>Plan Name</th>
                    <th>Monthly Payment</th>
                </tr>
                <tr>
                    <th>REPAYE*</th>
                    <th>10% Discrentionary Income</th>
                </tr>
                <tr>
                    <th>PAYE</th>
                    <th>10% Discrentionary Income</th>
                </tr>
                <tr>
                    <th>IBR**</th>
                    <th>20% Discrentionary Income</th>
                </tr>
                <tr>
                    <th>ICR</th>
                    <th>20% Discrentionary Income</th>
                </tr>
            </table>
            <p>*If married, taxes included in income calculation regardless of filing status.
                <br>**Loans forgiven in 25 years instead of 20.
            </p>
            <br>
            <h1> Overall Cost Difference </h1>
            <p>Although your monthly payments will be lower on an income based repayment plan (IBR's listed above),
                you will end up paying more over the lifespan of the loan.
            </p>
        </div>
    </div>
</template>

<script>
export default ({
    name: "Loans"
})
</script>

<style scoped>
    
    #credit {
        margin-top: 0%;
        text-align: left;
    }
    .yellow {
        margin-top: 0%;
        padding: 3%;
        padding-left: 18%;
        padding-right: 18%;
        background-color: #FDB913;
        text-align: left;
    }
    
    h1, p, table {
        margin-top: 0%;
        text-align: left;
    }

    h4{
        margin-left: -20px;
        font-size: 20px;
    }
</style>