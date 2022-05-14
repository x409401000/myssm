<template>
  <!-- <div style="margin-top: 200px; height: 100px;">
          <img alt="Vue logo" src="@/assets/logo.png"/>
        </div> -->
  <el-container>
    <el-header>
        <div class="headerhead">
           赣南医学院第一附属医院 
        </div>
    </el-header>
    <el-main>
        <div class="headermain">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item" @click="showCarousel(1)">
                <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </el-main>
    <el-footer>
        <el-steps  :active="active" finish-status="success" align-center >
            <el-step title="挂号"      description="挂号的教学视频" ></el-step>
            <el-step title="缴费"      description="缴费的教学视频"></el-step>
            <el-step title="核酸"      description="核酸的教学视频"></el-step>
            <el-step title="电子发票"   description="打印电子发票的教学视频"></el-step>
        </el-steps>
        <el-button type="primary" icon="el-icon-video-play" circle @click="next" ></el-button> 
    </el-footer>
  </el-container>
</template>

<script>
export default {
  /*组件名称，暴露后用这个名称来import和使用，一般name和vue文件名和将来引用import名称和 注册components:{}中写的组件名称，都是同一个名称*/
  name: "MainHeader",
  /*组件数据，用于插值*/
  data() {
    return {
      something: "",
      active: 0,
    };
  },

  /*组件的方法*/
  methods: {
    next() {
        if (this.active++ > 3) this.active = 0;
      },
    //接收参数
    showInfo2(e,num){
        console.log(e.target);//
        console.log(`接收参数：${num}`);
    }
  },

  /*组件属性，接收使用了组件的vue传过来的值，通过this.XXX来使用*/
  props: [],
};
</script>

<style scoped>
.el-header,
.el-footer {

  text-align: center;
}
.el-main {

  text-align: center;
  line-height: 160px;
}
.el-container {
  margin-bottom: 40px;
}
.headermain {
  height: 450px;
}
.headerhead{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 30px ;
}
</style>