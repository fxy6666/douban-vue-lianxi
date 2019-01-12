<template>
  <div class="tou">
    <p>{{tilte}}</p>
    <div class="con">
      <div class="aotu">
        <div class="item">
          <div class="color" v-for="val in titl" :style="{'color':val.color,'borderColor':val.color}" >
            <p >{{val.title}}</p>
            </p></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props:["tilte","titl"],
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .con {

    overflow: auto;
    width: 100%;

  }
  .con::-webkit-scrollbar{
    display: none;
  }
  .tou>p{
    margin-left: 5%;
  }
  .aotu {
    width: 1320px;
  }

  .item > .color {
    float: left;
    margin-left:1.5%;
    margin-top: 11px;
    border:1px solid;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    border-radius: 8px;
    padding: 0px 25px 0px 25px;
  }
</style>
