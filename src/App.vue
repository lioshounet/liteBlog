<template>
  <div id="app">
    <pageHeader id="pageHeader"></pageHeader>
    <funBar id="funBar"></funBar>
    <div class="funBox">
      <aSide id="aSide"></aSide> <pageMain id="pageMain"></pageMain>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

#pageHeader {
  width: 100%;
  height: 300px;
  background-color: rgb(255, 0, 0);
}
#funBar {
  width: 60%;
  position: relative;
  margin-left: 20%;
  height: 75px;
  background-color: rgb(72, 255, 0);
}

.funBox {
  width: 60%;
  position: relative;
  margin-left: 20%;
  // background-color: rgb(208, 255, 0);
  #aSide {
    width: 20%;
    position: absolute;
    height: 200px;
    background-color: rgb(0, 255, 234);
    margin-right: 0;
  }
  #pageMain {
    width: 80%;
    left: 20%;
    position: absolute;
    height: 200px;
    background-color: rgb(0, 4, 255);
    margin-right: 0;
  }
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
