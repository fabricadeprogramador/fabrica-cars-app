<template>
    <div id="container">
            <router-link to="/" id="logo-url"><img :src="logo" :alt="alt" id="logo"><h1 id="logo-texto">FÁBRICA CARS</h1></router-link>
    </div>
</template>
<script>
export default {
    name: "NavbarLogo",
    props: ["logo", "alt"],
}
</script>

<style scoped>

#logo {
    width: 50px;
    margin-left: 20px;
}

#logo-texto {
    float: right;
    margin-top: 5px;
    margin-left: 15px;
    font-size: 30px;
    font-weight: bolder;
    font-style: italic;
    color: rgb(255, 255, 255);
}



</style>