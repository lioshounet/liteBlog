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
  background: rgb(34, 34, 59);
  background: linear-gradient(
    90deg,
    rgba(34, 34, 59, 1) 0%,
    rgba(74, 78, 105, 1) 51%,
    rgba(154, 140, 152, 1) 100%
  );
  margin-bottom: 5px;
}
#funBar {
  width: 60%;
  position: relative;
  margin-left: 20%;
  border-radius: 30px;
  height: 75px;
  background-color: #9a8c98;
  margin-bottom: 5px;
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
    background-color: #4a4e69;
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
