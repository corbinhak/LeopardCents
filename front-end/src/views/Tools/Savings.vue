<template>
    <div class="orange">
        <h4><router-link to="/tools">&lt; Return to Tools</router-link></h4>
        <h1>
            Savings Calculator
        </h1>
        <form @submit.prevent>
            <table>
                <tr>
                    <th>
                        <label for="sbalance">Starting Balance: $</label>
                    </th>
                    <th>
                        <input v-model="sbalance" type="text" id="sbalance" name="sbalance">
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="mcontributions">Monthly Contributions: $</label>
                    </th>
                    <th>
                        <input v-model="mcontributions" type="text" id="mcontributions" name="mcontributions">
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="tgrow">Time to Grow (Years):</label>
                    </th>
                    <th>
                        <input v-model="tgrow" type="text" id="tgrow" name="tgrow">
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="irate">Interest Rate:</label>
                    </th>
                    <th>
                        <input v-model="irate" type="text" id="irate" name="irate">
                    </th>
                </tr>
            </table>
            <input @click="calculate();" type="submit" id="submit" value="Submit">   
        </form>
        <table>
            <tr>
                <td>
                    Resulting balance: ${{fbalance}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sbalance: 0,
            mcontributions: 0,
            tgrow:0,
            irate: 0,
            fbalance:0
        }
    },
    methods: {
        calculate(){
            var i = this.irate / 100 / 12;
            console.log(i);
            var savings = this.sbalance * Math.pow(1 + i, 12 * this.tgrow);
            var deposit = this.mcontributions * ((Math.pow(1+i,12* this.tgrow)-1)/i)
            this.fbalance = (savings + deposit).toFixed(2);
        }
    },
}
</script>

<style scoped>
    .orange {
        margin-top: 0%;
        padding: 3%;
        padding-left: 15%;
        padding-right: 15%;
        height: 500px;
        background-color: #F47521;
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