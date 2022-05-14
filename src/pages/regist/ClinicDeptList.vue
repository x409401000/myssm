<template>
  <el-main class="mainbox">
    <div>
      <div style="margin-bottom:20px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">选择读卡</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">读卡</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">选择科室</el-breadcrumb-item>
              <el-breadcrumb-item >选择医生</el-breadcrumb-item>
            </el-breadcrumb>
      </div>
      <el-row>
        <div style="margin-top: 15px;padding-left:17px">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="全部" value="1"></el-option>
              <el-option label="急诊" value="2"></el-option>
              <el-option label="内科" value="2"></el-option>
              <el-option label="外科" value="3"></el-option>
              <el-option label="便民" value="3"></el-option>
              <el-option label="全科" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-row>
      <el-row>
        <el-button class="mid-button" type="primary"  style="margin-left: 10px;" @click="toClinicDeptList()">儿科</el-button>
        <el-button class="mid-button" type="success" >心内科</el-button>
        <el-button class="mid-button" type="info" >神经内科</el-button>
        <el-button class="mid-button" type="warning" >神经外科</el-button>
        <el-button class="mid-button" type="danger" >泌尿外科</el-button>
        <el-button class="mid-button" type="primary" >耳鼻喉科</el-button>
        <el-button class="mid-button" type="success" >眼科</el-button>
        <el-button class="mid-button" type="info" >口腔科</el-button>
        <el-button class="mid-button" type="warning" >胸外科</el-button>
        <el-button class="mid-button" type="danger" >肾内科</el-button>
        <el-button class="mid-button" type="primary" >消化科</el-button>
        <el-button class="mid-button" type="success" >血管外科</el-button>
        <el-button class="mid-button" type="info" >乳腺科</el-button>
        <el-button class="mid-button" type="warning" >肛肠科</el-button>
        <el-button class="mid-button" type="danger" >肾内科</el-button>
        <el-button class="mid-button" type="primary" >消化科</el-button>
        <el-button class="mid-button" type="success" >血管外科</el-button>
        <el-button class="mid-button" type="info" >乳腺科</el-button>
        <el-button class="mid-button" type="warning" >肛肠科</el-button>
        <el-button class="mid-button" type="warning" >肛肠科</el-button>

      </el-row>
      <el-row>
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </el-row>
    </div>
  </el-main>
</template>

<script>

export default {
  name: "ClinicDeptList",
  data() {
    return {
      something: "",
    };
  },
  methods: {
    toClinicDeptList() {
      this.$router.push('/ClinicDoctorList')
    },
  },
  props: [],
};
</script>

<style scoped>
.mid-button {
  height: 100px;
  width: 140px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 110px;
 
}

</style>