<template>
  <div class="bigbox">
    <div class="textBox"><h1 class="webName">LioShounet个人博客</h1></div>
    <el-button type="primary" class="github">github</el-button>
    <el-button style="background-color: #fff; border: 1px solid #b29da0"
      >gitee</el-button
    >
  </div>
</template>


<style lang="scss" scoped>
// import '../public/elementMi/index.css';
.bigbox {
  padding-top: 100px;
  .textBox {
    text-align: center;
    .webName {
      color: #f2e9e4;
      .el-button {
      }
    }
  }
}
</style>

<script>
// import s from '../../../../public/elementMi/index.css'
export default {
  name: 'VueElementIndex',

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