<template>
    <div id="oncampus">
        <div id="yellow">
            <h4><router-link to="/resources" id="temp">&lt; Return to Resources</router-link></h4>
            <h1>
                Leopard Food Pantry
            </h1>
            <p>
                The Leopard Food Pantry is managed by the Student Service Center and provides 
                students access to nonperishable food and toiletery items at no cost.
            </p>
            <p>
                The pantry is located within a private room of the Student Service Center and
                requests can be made by <a href="https://leopardpantry.wufoo.com/forms/leopard-pantry-list/">
                completing this submission form</a> or contacting the pantry directly via email, <a
                href="mailto:leopardpantry@wit.edu">leopardpantry@wit.edu</a>.
            </p>
            <h1>
                Student Emergency Fund
            </h1>
            <p>
                The Student Emergency Fund is administered by the Dean of Students Office, working 
                in tangent with the Financial Aid department of the Student Service Center. The 
                fund was developed in 2005 to assist students who are experiencing financial hardship 
                with the expenses of life as a college student. The fund is also used to assist students 
                who experience an unplanned expense, such as having to return home for a family emergency. 
                Financial assistance given to students through the student emergency fund is not a loan.
            </p>
            <p>
                To submit an Emergency Fund request, please complete this form. A staff member will then 
                reach out to you, to follow-up with your request.
            </p>
        </div>
    </div>
</template>

<script>
export default ({
    name: "OnCampus"
})
</script>


<style scoped>
    #oncampus{
        margin-top: 0%;
        background-color: #FDB913;
    }
    
    #yellow {
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

    a{
        color: blue;
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