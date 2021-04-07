<template>
  <div class="index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>创建商品属性</span>
        <el-button style="float: right" type="primary" round @click="jump('goodattr')">返回</el-button>
      </div>

      <div class="a">
        <el-form ref="form" :model="form" label-width="100px" >
          <el-form-item label="属性名称" >
            <el-input v-model="form.name" ></el-input>
          </el-form-item>
          <el-form-item label="属性类型" >
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
         
          <el-form-item label="单/多选属性" >
            <el-radio-group v-model="form.resource">
              <el-radio label="唯一"></el-radio>
              <el-radio label="多选"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="值录入方式">
            <el-radio-group v-model="form.resource">
              <el-radio label="手工录入"></el-radio>
              <el-radio label="从下方选择" ></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="可选值">
            <el-input v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
    
<style lang="scss" scoped>
.index {
  .el-pagination {
    width: 100%;
    padding: 10px 20px 10px 0;
    text-align: right;
    background: #ebeef5;
    margin-top: 20px;
  }
  .box-card {
    width: 100%;
    .clearfix {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.box-card {
  width: 480px;
}
</style>