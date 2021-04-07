<template>
  <div class="index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>创建商品类型</span>
        <el-button style="float: right" type="primary" round @click="jump('goodtype')">返回</el-button>
      </div>

      <div class="a">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="类型名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入商品类型", trigger: "blur" },
        ],
       
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
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