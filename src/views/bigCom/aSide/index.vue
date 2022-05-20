<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#4a4e69"
      text-color="#fff"
      active-text-color="#feac0a"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
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
