<template>
     <div id="container">
        <h1 id="cu-h1">
            Contact Us
        </h1>
        <p id="cu-p">
            Have any questions or concern? Feel free to send us a message!
        </p>
        <form name="Contact Us Form" @submit.prevent="sendEmail">
            <div>
                <div id="cu-ul" >
                    
                    <div id="cu-li">
                         <label id="cu-labeln" for="name">Name:</label>

                        <input type="text" id="cu-txt-name" name="name">
                    </div>
                    <div id="cu-li">
                        <label id="cu-labele" for="email">Email:</label>

                        <input type="email" id="cu-txt-email" name="email">
                    </div>
                </div>
                <br>
                <br>
                <label id="cu-labelm" for="message">Message:</label><br>
                <textarea id="cu-message" name="txt-message" rows="4" cols="50">
                </textarea>
            </div>
            <input type="submit" id="cu-submit" value="Submit">
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default ({
    name: 'Contact',
    methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_ivzsova', 'template_q7zu0lm', e.target, 'user_Caj2u3a4PWpZRtMOJ8miU')
        .then((result) => {
            console.log('SUCCESS', result);
            alert("Form Submitted Succesfully!");
            location.replace("https://leopard-cents.netlify.app/#");
        }, (error) => {
            console.log('FAILED...', error);
            alert("Form failed to submit, please try again!");
            location.replace("https://leopard-cents.netlify.app/#/contact-us");
        });
    }
  }
})


</script>

<style scoped>
#container {
    height: 100%;
    width: 100%;
    padding-bottom: 5.9%;
}

#container::-webkit-scrollbar{
    display: none;
}

#cu-h1 {
   margin-top: -20px;
    color:white;
    text-align: center;
    font-size: 46px;
    padding-top: 3%;
}

#cu-p {
    color: white;
    text-align: center;
    padding-bottom: 50px;
    font-size: 20px;

}

#cu-labeln {
    color: white;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 35px;
}

#cu-labele {
    color: white;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 35px;
}

#cu-labelm {
    color: white;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 35px;
}


#cu-ul {
    list-style-type: none;
    margin: 0%;
    padding: 0%;

}

#cu-li {
    padding-bottom: 8px;
    display: inline;
    padding-right: 10px;
    padding-left: 10px;
}

#cu-txt-name {
    width: 330px;
    height:20px;
    background-color: lightgrey;
}

#cu-txt-email {
    width: 330px;
    height: 20px;
    background-color: lightgrey;
}

#cu-message {
    margin-top: 6px;
    height: 240px;
    width: 70%;
    background-color: lightgrey;
}

#cu-submit {
    margin-top: 15px;
    float: right;
    margin-right: 19%;
    background-color:  #05B13F;
    border: 5px solid #05B13F;
    border-radius: 5px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    font-size: 18px;
}

@media screen and (max-width: 950px) {

    #cu-li {
        display:block;
    }

    #cu-labele{

    }

    #cu-txt-name {
        width: 70%;
        margin-bottom: 30px;
    }

    #cu-txt-email {
        width: 70%;
    }

    #cu-p {
        margin-left: 15%;
        margin-right: 15%;
    }

}
</style>