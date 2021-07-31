<template>
    <div id="credit">
        <div id="orange">
            <h4><router-link to="/tools">&lt; Return to Tools</router-link></h4>
            <h1>
                Credit Payoff Calculator
            </h1>
            <form @submit.prevent>
                <table>
                    <tr>
                        <th>
                            <label for="rbalance">Remaining Balance: </label>
                        </th>
                        <th>
                            <input v-model="balance" type="text" id="rbalance" name="rbalance">
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <label for="months">Amount of Months: </label>
                        </th>
                        <th>
                            <input v-model="months" type="text" id="months" name="months">
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <label for="interest">Interest/APR: </label>
                        </th>
                        <th>
                            <input v-model="interest" type="text" id="interest" name="interest">
                        </th>
                    </tr>
                </table>
                <input @click="calculate();" type="submit" id="submit" value="Submit">   
            </form>
            <table style="width:100%">
                <tr>
                    <td>
                        Monthly Interest: ${{apr}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Monthly Principal: ${{principal}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Monthly Total: ${{total}}
                    </td>
                </tr>
                    
            </table>
        </div>
    </div>
</template>

<script>
export default ({
    name: "Credit",
    data() {
        return {
            balance: 0,
            months: 0,
            apr: 0,
            interest: 0,
            principal: 0,
            total: 0
        }
    },
    methods: {
        calculate(){
            this.apr = (this.balance * (this.interest*0.01)) / 12;
            this.principal = this.balance / this.months;
            this.total = (this.balance / this.months) + this.apr;
            this.apr = this.apr.toFixed(2);
            this.principal = this.principal.toFixed(2);
            this.total = this.total.toFixed(2);
        },
    },
})
</script>

<style scoped>
    
    #credit {
         margin-top: 0%;
        background-color: #F47521;

    }
    
    #orange {
        margin-top: 0%;
        padding: 3%;
        padding-left: 15%;
        padding-right: 15%;
        height: 625px;
    }
    
    h1 {
        text-align: center;
        padding-bottom: 20px;
    }



    table{
        width: 100%;
        align-self: center;
    }

    th{
        padding-bottom: 30px;
    }

    input{
        font-size: 18px;
    }

    #submit{
        background-color:  #05B13F;
        border: 5px solid #05B13F;
        border-radius: 5px;
        color: white;
        font-size: 18px;
        width: 150px;
        margin-left: 50%;
    }

    label {
        font-size: 20px;
        text-align: right;
        width: 100%;


    }

    td{
        padding-top: 20px;
        font-size: 20px;
    }

    h4{
        text-align: left;
        margin-left: -20px;
        font-size: 20px;
    }
</style>