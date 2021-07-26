<template>
    <div id="budgeting">
        <div class="yellow">
            <h4><router-link to="/resources">&lt; Return to Resources</router-link></h4>
            <h1>
                What is Budgeting?
            </h1>
            <h2>
                Budgeting is a plan of how you are going to save and spend your money.
            </h2>
            <br>
            <h1>
                What are the Advantages of Budgeting?
            </h1>
            <h2 style="text-align:center">
                It's almost guarenteed that you'll have money for the things you need.
                <br>
                It helps you save for unexpected costs.
                <br>
                It will keep you aware of how your money is being spent.
            </h2>
            <br>
            <h1>
                How to Make A Budget:
            </h1>
            <h2 style="text-align:center">
                Determine Wants And Needs<br>
                On a daily basis, what are the requirements for living and which things can you live without?
                <br>
                <br>
                Calculate Your Expenses<br>
                Figure out how much you're spending on expenses:<br>
                Fixed expenses are consistent, like rent or student loan repayment.<br>
                Flexible expenses vary, like grocery costs or electricity bills.
                <br>
                <br>
                Calculate Your Income<br>
                Calculate how much money is coming in, like momey from a job.
                <br>
                <br>
                Track Spending and Income<br>
                Each month, track how much money is coming in and going out. It's helpful to create a spreadsheet
                to viusally see this! Then, you'll see how much extra you're spending and where there may be room
                to save!
                <br>
                <br>
                Stick to the Plan<br>
                Create a plan that suits your money needs. Keep in mind, it's always good to save money each month for
                unexpected costs! Stay motivated and stick to your plan!
            </h2>
        </div>
    </div>
</template>

<script>
export default ({
    name: "Budgeting"
})
</script>

<style scoped>
    
    #budgeting {
        margin-top: 0%;
        text-align: left;
    }
    .yellow {
        margin-top: 0%;
        padding: 3%;
        padding-left: 18%;
        padding-right: 18%;
        padding: 3%;
        background-color: #FDB913;
        text-align: left;
    }
    
    h1, p {
        text-align: left;
    }
</style>