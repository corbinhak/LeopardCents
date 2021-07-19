<template>
    <header>
       <table class="navbar-left">
            <tbody>
                <tr>
                    <th>
                        <img src="./images/Leopard.png" width="85" height="75" alt=""/>
                    </th>
                    <th>
                        <h1 id="title">
                            LeopardCents
                        </h1>
                    </th>
                </tr>
            </tbody>
        </table>        
        <nav>
            <ul class="navbar-right">
                <li>
                    <a>
                        Blog
                    </a>
                </li>
                <li>
                    <a>
                        Resources
                    </a> 
                </li>
                <li>
                    <a>
                        Tools
                    </a>
                </li>
                <li>
                    <button>
                        Meet With Us
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header"

}
</script>

<style scoped>
    body,html {
        margin: 0px;
        padding: 0px;
        margin-top: 0px;
    }

    header {
        background-color:black;
        height: 80px;
        width: 100%;
    }

    #title {
        color: white;
        vertical-align: middle;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    button {
        background-color:  #05B13F;
        border: 5px solid #05B13F;
        border-radius: 5px;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        color: white;
        font-size: 18px;

    }

    ul {
        list-style-type: none;
    }

    li {
        display: inline-flex;
        color:white;
        margin: 0 25px;
        font-size: 18px;
    }

    a {
        color: white;
    }

    .navbar-left {
        float: left;
        margin-top: 0%;
    }

    .navbar-right {
        float: right;
        margin-right: 5px;
        margin-top: 25px;
        font-family: Arial, Helvetica, sans-serif;
    }

</style>
