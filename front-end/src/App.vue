<template>
  <div id="nav">
    <div id="app">
    <nav>
      <router-link to="/">
        <div class="navbar-left">
          <table class="navbar-left">
            <tbody>
                <tr>
                    <th>
                        <img src="./assets/Leopard.png" width="85" height="75" alt=""/>
                    </th>
                    <th>
                        <h1 id="title">
                            LeopardCents
                        </h1>
                    </th>
                </tr>
            </tbody>
        </table> 
        </div>
      </router-link>
      <div class="navigation__right">
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/resources">Resources</router-link></li>
        <li><router-link to="/tools" >Tools</router-link></li>
        <li><a>Meet with Us</a></li>
      </div>
    </nav>
    <router-view/>
  </div>
  </div>
</template>

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
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color:#000000;
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

a {
  color:white;
  text-decoration: none;
}

router-link {
  color: white;
  text-decoration: none;
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

</style>
