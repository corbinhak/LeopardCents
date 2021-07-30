<template>
    <div id="credit">
        <div class="orange">
            <h4><router-link to="/tools">&lt; Return to Tools</router-link></h4>
            <h1>
                Credit Payoff Calculator
            </h1>
            <form @submit.prevent>
                <label for="rbalance">Remaining Balance: </label>
                <input v-model="balance" type="text" id="rbalance" name="rbalance"><br>
                <label for="months">Amount of Months: </label>
                <input v-model="months" type="text" id="months" name="months"><br>
                <label for="interest">Interest/APR: </label>
                <input v-model="interest" type="text" id="interest" name="interest"><br>
                <input @click="calculate();" type="submit" value="Submit">   
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