<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#4a4e69"
      text-color="#fff"
      active-text-color="#feac0a"
    >
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">Vue</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">原生js</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">python</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">杂七杂八的前端</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
</style>


<script>
export default {
  name: 'VueElementIndex',


  data() {
    return {
      options: [{
        value: 'zhinan',
        label: '指南',

      }, {
        value: 'zujian',
        label: '组件',

      }, {
        value: 'ziyuan',
        label: '资源',
      }]
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
