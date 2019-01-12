<template>
  <div class="biana">
    <div class="float" v-for="val in array">{{val.text}}</div>
    <div class="clear"></div>
  </div>

  </div>
</template>
<script>
  import Headerzi from './headerzi.vue'

  export default {
    name: "",
    components: {
      Headerzi
    },
    data: function () {
      return {
        array: [{text: "影院热映"}, {text: "生活在别处"}, {text: "豆瓣时间"}, {text: "使用豆瓣App"}],
      }
    },
  }
</script>

<style scoped>

  .clear {
    clear: both;
  }

  .biana {
    width: 100%;
    text-align: center;
  }

  .float {
    margin-top: 10px;
    float: left;
    width: 40%;
    height: 40px;
    margin-left:6%;
    line-height: 40px;
    background: #F6F6F6;
  }

  .row-bg div {
    width: 150px;
    height: 40px;
    line-height: 40px;
    background: #F6F6F6;


  }

  .row-bg div:nth-of-type(1) {

  }

  .row-bg div:nth-of-type(2) {
    float: left;
  }

  .row-bg div:nth-of-type(3) {
    float: left;
  }

  .row-bg div:nth-of-type(4) {
    float: left;
  }
</style>
