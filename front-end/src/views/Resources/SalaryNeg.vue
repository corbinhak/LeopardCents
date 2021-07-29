<template>
    <div id="salaryneg">
        <div id="red">
            <h4><router-link to="/resources">&lt; Return to Resources</router-link></h4>
            <h1>
                What are Salary Negotiations?
            </h1>
            <h2>
                Salary negotiations are conversations between you and a representative of a company
                that aim to secure a higher salary you deserve. When you decide that you want to negotiate
                a better salary be prepared to:
            </h2>
            <h3>Build Your Case: Prove that you are worth investing in with examples of the value you hold.</h3>
            <h3>Face Some Resistance: Be prepared to answer questions like "Why do you deserve this salary?"</h3>
            <h3>
                Find A Balance Between Firm And Flexible: A negotiation will not go well if you give into a
                minimal salary increase or if you refuse to compromise. Be prepared to go back-and-forth during
                negotiations until you decide you are comfortbale with the decision that's been reached.
            </h3>
            <br>
            <h1>
                Why is it important to negotiate your salary?
            </h1>
            <h2>
                It's important to understand that salary negotiation is a part of the employment process and that
                a higher salary is often a  part of advancing in your career. Your salary is how a company supports
                your work-life balance, careeer development, and work flexiblity. Negotiating for these perks will
                help you get the complete salary and benefits you need.
            </h2>
            <br>
            <h1>
                Salary Negotiation Tips
            </h1>
            <h2 style="text-align:center">
                Salary negotiation does not need to feel uncertain or intimidating if you have done research to learn
                a realistic salary range to ask for, there is nothing to worry about.
                <br>
                <br>
                Have a salary ramge rather than a single figure.
                <br>
                <br>
                Do not sell yourself short.
                <br>
                <br>
                Practice your pitch at least once before the actual negotiation.
                <br>
                <br>
                Be gracious.
                <br>
                <br>
                Be confident in your delievery.
                <br>
                <br>
                Avoid accepting the first offer.
            </h2>

        </div>
    </div>
</template>

<script>
export default ({
    name: "SalaryNeg"
})
</script>

<style scoped>
    
    #salaryneg {
        margin-top: 0%;
        background-color: #E7202B;

    }
    #red {
        margin-top: 0%;
        padding: 3%;
        padding-left: 15%;
        padding-right: 15%;
        text-align: left;
    }
    
    h1 {
        text-align: left;
        font-size: 24px;
    }

    h2 {
        text-align: left;
        font-size: 18px;

    }

    h3{
        padding-bottom: 5px;
        padding-left: 15px;
    }

    h4{
        font-size: 20px;
        text-align: left;
        margin-left: -20px;

    }
</style>