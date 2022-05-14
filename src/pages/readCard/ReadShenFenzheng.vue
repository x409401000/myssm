<template>
  <el-main class="mainbox">
    <div>
      
        <el-row>
          <div style="margin-bottom:20px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">选择读卡</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">读卡</el-breadcrumb-item>
              <el-breadcrumb-item >选择科室</el-breadcrumb-item>
              <el-breadcrumb-item>选择医生</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
      </el-row>
      
      <el-row >
        <el-col :span="20">
            <el-form label-position="left" label-width="80px" :model="patient">
              <el-form-item label="身份证">
                <el-input v-model="patient.id"></el-input>
              </el-form-item> 
            </el-form>
        </el-col>
        <el-col :span="4" >
          <div style="text-align:center;">
            <el-button type="success" @click="goClinicDeptList()" round >下一步</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div class="patinfo">
          <el-descriptions class="margin-top" title="确认信息" :column="3" :size="size" border>
            <template slot="extra">
              <!-- <el-button type="primary" size="small">操作</el-button> -->
            </template>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                姓名
              </template>
              kooriookami
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                手机号
              </template>
              18100000000
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                居住地
              </template>
              苏州市
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                备注
              </template>
              <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-office-building"></i>
                联系地址
              </template>
              江苏省苏州市吴中区吴中大道 1188 号
            </el-descriptions-item>
          </el-descriptions>

        </div>
      </el-row>
      
      <el-row>
        <div class="teachingvideo">教学视频</div>
      </el-row>
    </div>
  </el-main>
</template>

<script>
export default {
  name: "ReadShenFenzheng",
  data() {
    return {
      something: "",
      patient: {
        name: "",
        id: "3607021987121906632",
        region: "",
        type: "",
      },
    };
  },
  methods: {
    goClinicDeptList() {
      this.$router.push("/ClinicDeptList");
    },
  },
  props: [],
};
</script>

<style scoped>

.el-main {
  background-color: #f6f7f8;
  color: #333;
  text-align: left;
  line-height: 10px;
}


.patinfo {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.04) 0px 0px 6px;
  text-align: center;
  height: 150px;
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 20px;
}
</style>