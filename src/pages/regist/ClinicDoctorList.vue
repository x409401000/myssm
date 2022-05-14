<template>
  <el-main class="mainbox">
    <div>
      <div >
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">选择读卡</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">读卡</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">选择科室</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">选择医生</el-breadcrumb-item>
            </el-breadcrumb>
      </div>
      
      <el-row>
        <div style="  text-align: left;line-height: 260px;margin-top:20px;">
          <el-popover
            placement="right"
            width="400"
            trigger="click" style="margin-left:10px">
            <el-table :data="gridData" @current-change="handleCurrentChange">
              <el-table-column width="200" property="date" label="预约时段" ></el-table-column>
              <el-table-column width="100" property="name" label="剩余" ></el-table-column>
              <el-table-column width="100" property="opration" label="操作" ></el-table-column>
            </el-table>

            <el-button class="mid-button" type="primary" slot="reference">张教授</el-button>
          </el-popover>
         
          
        </div>
      
      </el-row>
      <el-row>
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </el-row>
      <el-row>
        <div class="teachingvideo">教学视频</div>
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
      currentRow: null,
      gridData: [{
          date: '08:00~09:00',
          name: '2',
          opration:'点选挂号'
        }, {
          date: '09:00~10:00',
          name: '10',
          opration:'点选挂号'
        }, {
          date: '10:00~11:00',
          name: '20',
          opration:'点选挂号'
        }, {
          date: '11:00~12:00',
          name: '20',
          opration:'点选挂号'
        }, {
          date: '14:00~15:00',
          name: '10',
          opration:'点选挂号'
        }, {
          date: '15:00~16:00',
          name: '20',
          opration:'点选挂号'
        }, {
          date: '16:00~17:00',
          name: '20',
          opration:'点选挂号'
        }
        ]
    };
  },
  methods: {
      handleCurrentChange(val) {
        console.log(val);
        this.currentRow = val;
        this.$router.push("/RegistPay");
        
      }
    },
  props: [],
};
</script>

<style scoped>
.mid-button {
  height: 250px;
  width: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}

</style>