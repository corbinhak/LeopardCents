<template>
    <div id="container">
        <h1>
            Select a Tool
        </h1>
        <table>
            <tbody>
                <tr>
                    <th>
                        <button class="orange">
                            <router-link to="/tools/credit"> Credit </router-link>
                        </button>
                    </th>
                    <th>
                        <button class="yellow">
                            Loans
                        </button>
                    </th>
                    <th>
                        <button class="red">
                            <router-link to="/tools/renting"> Renting </router-link>
                        </button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <button class="yellow">
                            Budgeting
                        </button>                        
                    </th>
                    <th>
                        <button class="orange">
                            Investing
                        </button>                        
                    </th>
                    <th>
                        <button class="yellow">
                            Taxes
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Tools"
}
</script>

<style scoped>
     #container {
        background-color: white;
        height: 550px;
        margin-top: 0%;
        padding: 3%;
        align-content: center;
    }

    h1{
        margin-top: -10px;
        font-size: 36px;
        color: black;
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif
    }

    table {
        margin-right: auto;
        margin-left: auto;
        padding-top: 10px;
    }

    th {
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 16px;
        padding-bottom: 16px;
    }

    button {
        height: 130px;
        width: 320px;
        font-size: 30px;
        border: none;
        color:white;
    }

    .yellow {
        background-color: #FDB913;
    }

    .orange {
        background-color: #F47521;
    }

    .red {
        background-color: #E7202B;
    }

</style>