<template>
  <el-main class="mainbox">
    <div style="align-center">
      <el-result icon="success" title="缴费成功" subTitle="如有需要，请返回首页进行其他操作">
        <template slot="extra">
          <el-button type="primary" size="medium" @click="toMainMenu()">返回首页</el-button>
        </template>
      </el-result>
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
    toMainMenu() {
      this.$router.push("/home");
    },
  },
  props: [],
};
</script>

<style scoped>

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 30px;
}

</style>