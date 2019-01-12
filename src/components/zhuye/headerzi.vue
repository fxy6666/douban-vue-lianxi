<template>
  <div id="bi">
      <el-col :span="6"><div class="grid-content bg-purple">{{titel.text}}</div></el-col>
  </div>
</template>
<script>
  export default {
    name: "",
    props:["titel"],
    components:{
    },
  }
</script>

<style scoped>





</style>
<script>
  import ElContainer from "element-ui/lib/container";
  export default {
    components: {ElContainer}
  }
</script>
