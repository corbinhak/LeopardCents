<template>
    <h2>Leopard Cents</h2>
    <ul class="navbar-right">
        <li><a>Blog</a></li>
        <li><a>Resources</a> </li>
        <li><a>Tools</a></li>
        <li><a>Meet with Us</a></li>
    </ul>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
h2 {
    display: flex;
    flex-direction: row;
}
ul {
  list-style-type: none;
}
li {
  display: inline-flex;
  margin: 0 10px;
}
.navbar-right {
    float: right;
}
</style>