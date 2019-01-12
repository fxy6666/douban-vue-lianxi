<template>
<div>
  <div class="com">
    <p>{{tilte}}<a href="#">{{titlea}}</a></p>
    <div class="wit">
      <Onezi :onezidata="onedata"></Onezi>
    </div>
  </div>
</div>
</template>

<script>
  import Onezi from './onezi.vue'

  export default {
    name: "",
    props: ["onedata", "tilte", "titlea"],
    components: {
      Onezi
    }

  }
</script>

<style scoped>
  .wit {
    width: 100%;
    overflow: auto;
    margin-top: 15px;

  }

  .wit::-webkit-scrollbar {
    display: none;
  }

  .com {
    position: relative;
    top: -26px;
  }

  .com > p {
    margin-top: 30px;
    margin-left: 5%;
    width: 90%;

  }

  p > a {
    position: absolute;
    right: 0%;
    margin-right: 5%;
    text-decoration: none;
    font-size: 10px;
    color: #05B512;
  }
</style>
