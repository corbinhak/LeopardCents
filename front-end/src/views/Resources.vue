<template>
    <div id="container">
        <h1>
            Select a Topic
        </h1>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <button class="orange">
                                <router-link to="/resources/credit"> Credit </router-link>
                            </button>
                        </th>
                        <th>
                            <button class="yellow">
                                <router-link to="/resources/loans"> Loans </router-link>
                            </button>
                        </th>
                        <th>
                            <button class="red">
                                <router-link to="/resources/salary-negotiation"> Salary Negotiation </router-link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <button class="yellow">
                                <router-link to="/resources/budgeting"> Budgeting </router-link>
                            </button>                        
                        </th>
                        <th>
                            <button class="orange">
                                 <router-link to="/resources/investing"> Investing </router-link>
                            </button>                        
                        </th>
                        <th>
                            <button class="yellow">
                                <router-link to="/resources/taxes"> Taxes </router-link>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <button class="red">
                                <router-link to="/resources/retirement"> Retirememt </router-link>
                            </button>
                        </th>
                        <th>
                            <button class="yellow">
                                <router-link to="/resources/oncampus"> On-Campus Resources </router-link>
                            </button>
                        </th>
                        <th>
                            <button class="orange">
                                <router-link to="/resources/housing"> Housing </router-link>
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
export default {
    name: "Resources"
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