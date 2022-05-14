<template>
  <div id="app">
    <el-container>
      <el-header height="720px" >
        <MainHeader></MainHeader>
      </el-header>
      <el-main >
        <div style="height:730px;">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer height="150px">
        <MainFooter></MainFooter>    
      </el-footer>
    </el-container>
  </div>
</template>

<script>
//  import MainMenu from '@/pages/mainMenu/MainMenu.vue'
import MainHeader from '@/components/mainHeader/MainHeader.vue'
import MainFooter from '@/components/mainFooter/MainFooter.vue'

export default {
  name: "App",
  components:{
    MainHeader,MainFooter
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.el-header{

  color: #333;
  text-align: center;
  line-height: 60px;
  border-radius: 6px;
}
.el-footer {
  background-color: #dce0e6;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-radius: 6px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #f3f5f7;
  color: #333;
  text-align: center;

  border-radius: 6px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.teachingvideo {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.04) 0px 0px 6px;
  text-align: center;
  height: 320px;
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 20px;
  margin-top: 10px;
  background-color: #ffffff;
}
</style>
