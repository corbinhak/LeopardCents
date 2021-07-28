<template>
  <div>
    <header>
        <table class="navbar-left">
            <tbody>
                <tr>
                    <th>
                        <img src="./assets/Leopard.png" width="75" height="65" alt=""/>
                    </th>
                    <th>
                      <router-link to="/"> 
                            <h1 id="title">
                                LeopardCents
                            </h1>
                      </router-link>
                    </th>
                </tr>
            </tbody>
        </table>        
        <nav> 
            <div class="navbar-right">
                <li id="header-li">
                  <router-link to="/blog"> 
                     Blog
                  </router-link>
                </li>
                <li id="header-li">
                  <router-link to="/resources"> 
                        Resources
                  </router-link>
                </li> 
                <li id="header-li">
                  <router-link to="/tools"> 
                        Tools
                  </router-link>
                </li>
                <button id="mwu-button">
                    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
                    <div id='calendy'></div>
                    <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/leopardcents/oneonone'});return false;">
                        Meet With Us
                    </a>
                </button>
            </div>
        </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'
export default {
  name: 'Calendy Embed',
  mounted: function () {
    postscribe('#calendy', `<script src="https://assets.calendly.com/assets/external/widget.js"><\/script>`)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body,html {
  background-color: black;
  margin: 0px;
  padding: 0px;
  margin-top: 0px;
  height: 100%;
  width: 100%;
}

header {
    background-color:black;
    overflow: hidden;

}

#title {
    color: white;
    vertical-align: middle;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

a {
    text-decoration: none;
    color:white;
}

#mwu-button {
    background-color:  #05B13F;
    border: 5px solid #05B13F;
    border-radius: 5px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: white;
    font-size: 18px;
}

#header-li {
    display: inline-flex;
    color:white;
    margin: 0 25px;
    font-size: 18px;
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
    padding-right: 1%;
}

@media screen and (max-width: 795px) {
#header-li {
    float: none;
    display: block;
    text-align: middle;
    padding: 10px;
}

.navbar-left {
    float: none;
    align-items: center;
}

.navbar-right {
    float: none;
    padding: 10px;
    text-align: center;
    margin-top: -10px;
}

}

</style>
