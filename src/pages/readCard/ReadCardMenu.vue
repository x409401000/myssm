<template>
  <el-main class="mainbox">
    <div >
      <el-row>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">选择读卡</el-breadcrumb-item>
          <el-breadcrumb-item >读卡</el-breadcrumb-item>
          <el-breadcrumb-item >选择科室</el-breadcrumb-item>
          <el-breadcrumb-item>选择医生</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <br>
      <el-row>
        <el-button class="mid-button" @click="goReadShenFenzheng()" >身份证</el-button>
        <el-button class="mid-button" type="primary" >社保卡</el-button>
        <el-button class="mid-button" type="success" >就诊卡</el-button>
        <el-button class="mid-button" type="info" >居民电子健康卡</el-button>
        <el-button class="mid-button" type="warning" >手动输入卡号</el-button>
        <el-button class="mid-button" type="danger" >二维码</el-button>
      </el-row>
    </div>
  </el-main>
</template>

<script>

export default {
  name: "ReadCard",
  data() {
    return {
      something: "",
    };
  },
  methods: {
    goReadShenFenzheng() {
      // console.log("xxx")
      this.$router.push('/ReadShenFenzheng')
    },
  },
  props: [],
};
</script>

<style >
.mid-button {
  height: 100px;
  width: 140px;
}
.el-main {
  background-color: #f6f7f8;
  color: #333;
  text-align: center;
  line-height: 110px;
 
}
.buttongroup{
 margin-top: 100px;
 margin-bottom: 100px;
}
</style>