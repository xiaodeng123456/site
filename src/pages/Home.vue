<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content">
          1
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          2
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          3
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          4
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          5
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          6
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data(){
    return{

    }
  }
}
</script>


<style scoped>
  .grid-content{
    background: #fff;
    border-radius: 5px;
    padding:30px;
    margin-bottom: 30px;
  }
</style>


