<template>
    <div id="retirement">
        <div id="red">
            <h4><router-link to="/resources">&lt; Return to Resources</router-link></h4>
            <h1>
                SAVING FOR RETIREMENT
            </h1>
            <ul>
                <li>
                    <h3>
                        Getting Started: The first thing to do when starting to save for retirement is to find out what kinds of benefits your employer offers.
                    </h3>
                </li>
                <li>
                    <h3>
                        Know your options: Many employers will allow you to take pre-tax dollars out of your paycheck and invest them into your retirement account. Some employers will also match part of their worker's contributions. It can be in your best interest to take advantage of this match because it is your employer's way of giving you more money.

                    </h3>
                </li>
                <li>
                    <h3>
                        Start Early: You should set up your retirement plan as soon as you begin working. If you choose a small amount of your paycheck to be allocated towards your retirement plan from the first day you begin employment, you will be less likely to notice that money missing from your paycheck.
                    </h3>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default ({
    name: "Retirement"
})
</script>


<style scoped>
    #retirement{
        margin-top: 0%;
        background-color: #E7202B;
    }
    
    #red {
        margin-top: 0%;
        padding: 3%;
        padding-left: 15%;
        padding-right: 15%;
        height: 625px;
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