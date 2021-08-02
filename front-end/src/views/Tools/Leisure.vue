<template>
    <div class="yellow">
        <h4><router-link to="/tools">&lt; Return to Tools</router-link></h4>
        <h1>
            Tip Calculator
        </h1>
        <form @submit.prevent>
            <table>
                <tr>
                    <th>
                        <label for="amount">Bill Amount: $</label>
                    </th>
                    <th>
                        <input v-model="amount" type="text" id="amount" name="amount">
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="tip">Tip Percentage: %</label>
                    </th>
                    <th>
                        <input v-model="tip" type="text" id="tip" name="tip">
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="numpeople">Number of People (Divide By):</label>
                    </th>
                    <th>
                        <input v-model="numpeople" type="text" id="numpeople" name="numpeople">
                    </th>
                </tr>
            </table>
            <input @click="calculate();" type="submit" id="submit" value="Submit">   
        </form>
        <table>
            <tr>
                <td>
                    Tip Toal: ${{ftip}}
                </td>
            </tr>
             <tr>
                <td>
                    Total Amount Per Person (Bill + Tip): ${{famount}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            amount: 0,
            tip: 0,
            numpeople: 1,
            ftip: 0,
            famount:0,
        }
    },
    methods: {
        calculate(){
            var percentage = this.tip / 100;
            this.ftip = this.amount * percentage;
            console.log(this.amount);
            console.log(this.ftip);
            this.famount = ((parseInt(this.amount) + this.ftip)/this.numpeople).toFixed(2);
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