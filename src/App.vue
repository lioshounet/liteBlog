<template>
  <div id="app">
    <pageHeader></pageHeader>

    <funBar></funBar>
    <aSide></aSide>
    <pageMain></pageMain>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
import aSide from "./views/bigCom/aSide/index";
import funBar from "./views/bigCom/funBar/index";
import pageHeader from "./views/bigCom/header/index";
import pageMain from "./views/bigCom/main/index";
export default {

  name: 'VueElementApp',
  components: { aSide, funBar, pageHeader, pageMain },


  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
