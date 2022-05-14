<template>
  <el-main class="mainbox">
    <div >
      <el-row justify="space-between" style="align:center">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>挂号信息确认</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <el-descriptions title="用户信息">
              <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
              <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
              <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
              <el-descriptions-item label="备注">
                <el-tag size="small">学校</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          </el-descriptions>
          
          <div style="text-align:center;padding: 20px;">
            <el-button type="success" icon="el-icon-s-goods" @click="toPayResult()">支付</el-button>
          </div>
          
        </el-card>
        
      </el-row>
      <el-row>
        <div class="teachingvideo">教学视频</div>
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
    toPayResult() {
      this.$router.push("/PayResult");
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
  text-align: left;
  line-height: 30px;
}
.buttongroup{
 margin-top: 100px;
 margin-bottom: 100px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  
</style>