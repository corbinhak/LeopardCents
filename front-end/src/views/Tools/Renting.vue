<template>
    <div class="red">
        <h4><router-link to="/tools">&lt; Return to Tools</router-link></h4>
        <h1>
             Renting Ranges
        </h1>
        <form @submit.prevent>
                <table>
                    <tr>
                        <th>
                            <label for="income">Your Income: </label>
                        </th>
                        <th>
                            <input v-model="income" type="text" id="income" name="income">
                        </th>
                    </tr>
                </table>
                <input @click="getResults()" type="submit" id="submit" value="Submit"> 
            </form>
        <table>
            <tr>
                <td>
                    Low-End (~15% of Income): ${{low1}} - ${{low2}}
                </td>
            </tr>
            <tr>
                <td>
                    Mid-End (~25% of Income): ${{mid1}} - ${{mid2}}
                </td>
            </tr>
            <tr>
                <td>
                    High-End (~35% of Income): ${{high1}} - ${{high2}}
                </td>
            </tr>    
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            income: 0,
            low1: 0,
            low2: 0,
            mid1: 0,
            mid2: 0,
            high1: 0,
            high2: 0,
        }
    },
    methods: {
        getResults(){
            console.log(this.income);
            this.low1 = ((this.income * .10) / 10).toFixed(2);
            this.low2 = ((this.income * .15) / 10).toFixed(2);
            this.mid1 = ((this.income * .20) / 10).toFixed(2);
            this.mid2 = ((this.income * .25) / 10).toFixed(2);
            this.high1 = ((this.income * .30) / 10).toFixed(2);
            this.high2 = ((this.income * .35) / 10).toFixed(2);
        }
    },
    
}
</script>

<style scoped>
    .red {
        background-color: #E7202B;
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
        margin-left: 40%;
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