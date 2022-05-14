<template>

        <el-row class="foot-button">
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>

</template>

<script>
export default {
  /*组件名称，暴露后用这个名称来import和使用，一般name和vue文件名和将来引用import名称和 注册components:{}中写的组件名称，都是同一个名称*/
  name: "MainFooter",
  /*组件数据，用于插值*/
  data(){
    return {
      something: ''
    }
  },

  /*组件的方法*/
  methods:{
    dosomething(){
     
    }
  },

  /*组件属性，接收使用了组件的vue传过来的值，通过this.XXX来使用*/
  props:[],
}
</script>

<style>

</style>