<template>
    <div class="yellow">
        <h4><router-link to="/tools">&lt; Return to Tools</router-link></h4>
        <h1>
            Loan Calculator
        </h1>
        <form @submit.prevent>
            <table>
                <tr>
                    <th>
                        <label for="lamount">Loan Amount: $</label>
                    </th>
                    <th>
                        <input v-model="lamount" type="text" id="lamount" name="lamount">
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
                <tr>
                    <th>
                        <label for="lterm">Loan Term (Years):</label>
                    </th>
                    <th>
                        <input v-model="lterm" type="text" id="lterm" name="lterm">
                    </th>
                </tr>
            </table>
            <input @click="calculate();" type="submit" id="submit" value="Submit">   
        </form>
        <table>
            <tr>
                <td>
                    Monthly Payment: ${{tpayment}}
                </td>
                </tr>
            <tr>
                <td>
                    Total Interest Paid: ${{ipaid}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lamount: 0,
            irate: 0,
            lterm:0,
            tpayment:0,
            ipaid:0
        }
    },
    methods: {
        calculate(){
            var n = this.lterm * 12;
            var i = this.irate / 100 / 12;
            this.tpayment = ((this.lamount * (i * Math.pow(1+i,n))) / (Math.pow(1+i,n)-1)).toFixed(2);
            var tinterest = this.tpayment * n;
            this.ipaid = (tinterest - this.lamount).toFixed(2);
        }
    },
}
</script>

<style scoped>
    .yellow {
        margin-top: 0%;
        padding: 3%;
        padding-left: 15%;
        padding-right: 15%;
        height: 500px;
        background-color: #FDB913;
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
