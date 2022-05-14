<template>
      <div>  
        <div style="margin-top:50px">
          <el-row>
            <div style="margin-top: 10px;">
              <el-button class="big-button" type="danger" @click="goRegist()">挂号</el-button>
              <el-button class="big-button" type="success">缴费</el-button>
              <el-button class="big-button" type="primary">核酸检测</el-button>
              <el-button class="big-button" type="info">入院办理</el-button>
              <el-button class="big-button" type="warning">出院结算</el-button>
              <el-button class="big-button">住院预缴金充值</el-button>
            </div>
          </el-row>
        </div>
        <div style="margin-top:20px">
          <el-row>
            <el-button class="mid-button" type="danger" plain>电子卡打印</el-button>
            <el-button class="mid-button" type="primary" plain>补打凭条</el-button>
            <el-button class="mid-button" type="success" plain>费用清单打印</el-button>
            <el-button class="mid-button" type="info" plain>病历打印</el-button>
            <el-button class="mid-button" plain>报告打印</el-button>
            <el-button class="mid-button" type="warning"  plain>电子发票</el-button>
          </el-row>
        </div>
        <div style="margin-top:50px">
          <el-row>
            <el-button round>门诊费用查询</el-button>
            <el-button type="primary" round>住院清单查询</el-button>
            <el-button type="success" round>充值记录查询</el-button>
            <el-button type="info" round>药品查询查询</el-button>
            <el-button type="warning" round>诊疗服务查询</el-button>
            <el-button type="danger" round>价格查询</el-button>
          </el-row>
        </div>
        
      </div>
</template>

<script>


export default {
  name: "MainMenu",
  data(){
    return {
      something: ''
    }
  },
  methods:{
    goRegist(){
       this.$router.push('/readcardMenu')
       console.log("xxx");
    }
  },
  props:[],
}
</script>

<style scoped>
.big-button{
  height: 300px;
  width: 140px;
}
.mid-button{
  height: 100px;
  width: 140px;
}
.foot-button{
  padding-top: 40px;
}

</style>