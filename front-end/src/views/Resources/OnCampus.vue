<template>
    <div id="oncampus">
        <div id="yellow">
            <h4><router-link to="/resources">&lt; Return to Resources</router-link></h4>

        </div>
    </div>
</template>

<script>
export default ({
    name: "OnCampus"
})
</script>


<style scoped>
    #oncampus{
        margin-top: 0%;
        background-color: #FDB913;
    }
    
    #yellow {
        margin-top: 0%;
        padding: 3%;
        padding-left: 15%;
        padding-right: 15%;
        height: 525px;
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