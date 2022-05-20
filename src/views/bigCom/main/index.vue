<template>
  <div class="pageBox">
    <vuePage></vuePage>
  </div>
</template>

<style lang="scss" scoped>
.pageBox {
  .el-card {
  }
}
</style>

<script>
import vuePage from "../../codePage/vue"
export default {
  name: 'VueElementIndex',
  components: { vuePage },

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