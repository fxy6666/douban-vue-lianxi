<template>
  <div class="doub">
    <el-container class="nav">
      <el-header class="borade">
        <el-row>
          <el-col :span="11">
            <div class="grid-content bg-purple noe2">
              <router-link to="/Zhuye"><h1 style="color: #05B512">豆瓣</h1></router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple noe" >
              <router-link to="/Dianying" style="color: #98C5F4">电影</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple noe" >
              <router-link to="/Book" style="color: #CDB8AC">图书</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple noe" >
              <router-link to="/Guangbo" style="color: #E4A813"><span>{{messagea}}</span>广播</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple noe"  v-model="messagec" :click="tihuan">
              <router-link to="/Xiaozu" style="color: #58C7D7">小组</router-link>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple noe3"><img src="../assets/img/ic_actionbar_search_icon.png" alt="" width="20" height="20"></div>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
  </div>
</template>
<script>

  export default {
    name: "",
    data:{
      messagea:"111",
    },
    data:function(){
      return{
        shouyedata:[],

      }
    },
    components: {
    },
    methods:{
      tihuan(){
        console.log("aaaaa")
          // this.messagea="豆瓣App"
      }
    }
  }
</script>

<style scoped>

  .doub {
    position: relative;

  }

  .nav {
    position: fixed;
    top: 0px;
    z-index: 9;
    width: 100%;
    background: white;
  }

  .noe2 {
    margin-top: 12px;
  }

  .noe3 {
    margin-top: 18px;
  }

  .noe {
    margin-top: 15px;
  }

  .borade {
    border-bottom: 1px solid silver;
  }

  a {
    text-decoration: none;
  }
</style>
<script>
  import ElContainer from "element-ui/lib/container";

  export default {
    components: {ElContainer}
  }
</script>
<script>
  import ElHeader from "element-ui/lib/header";

  export default {
    components: {ElHeader}
  }
</script>
