<template>
    <div id="container">
        <h1>
            Contact Us
        </h1>
        <p>
            Have any questions or concern? Feel free to send us a message!
        </p>
        <form>
            <table>
                <tbody>
                    <tr>
                        <th scope="col">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name">
                        </th>
                        <th scope="col">
                            <label for="email">Enter your email:</label>
                            <input type="email" id="email" name="email">
                        </th>
                        <th>
                            <br><br><br>
                        </th>
                    </tr>
                </tbody>
            </table>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" cols="50">
            </textarea>
            <br>
            <input type="submit" id="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default ({
    name: 'Contact'
})


</script>

<style scoped>
    #container {
        background-color: black;
        height: 550px;
        margin-top: 0%;
        padding: 3%;
    }



    h1 {
       margin-top: -20px;
        color:white;
        text-align: center;
        font-size: 46px;

    }

    p {
        color: white;
        text-align: center;
        padding-bottom: 30px;
        font-size: 20px;
    }

    label {
        color: white;
        padding-right: 18px;
        padding-left: 150px;
        font-size: 18px;
        font-family: 'Courier New', Courier, monospace;
    }


    #name {
        width:280px;
        height:20px;
    }

    #email {
        width: 280px;
        height:20px;

    }

    textarea {
        margin-top: 6px;
        height: 240px;
        width: 1000px;
        margin-left: 150px;
    }

    #submit {
        margin-top: 30px;
        float: right;
        margin-right: 20%;
        background-color:  #05B13F;
        border: 5px solid #05B13F;
        border-radius: 5px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: white;
        font-size: 18px;
    }



</style>