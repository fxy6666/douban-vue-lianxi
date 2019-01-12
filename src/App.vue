<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeCreate() {
      this.$router.push("Book")
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0
  }

  .el-rate__icon {
    font-size: 1px;
    margin-right: 2px;
  }

  .el-icon-star-on {
    font-size: 1px;
    margin-right: 1px;
  }
</style>
