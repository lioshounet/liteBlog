<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#726d81"
      text-color="#fff"
      active-text-color="#feac0a"
    >
      <el-menu-item index="1">基础内容</el-menu-item>
      <el-menu-item index="2">百度地图</el-menu-item>
      <el-menu-item index="3">Echarts</el-menu-item>
      <el-menu-item index="4">{{$store.state.tianhao}}</el-menu-item>
    </el-menu>
  </div>
</template>


<style lang="" scoped>
</style>

<script>
export default {
  name: 'VueElementVue',

  data() {
    return {
      activeIndex:"1",
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>