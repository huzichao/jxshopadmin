<template>
  <div class="index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>角色创建</span>
        <el-button style="float: right" type="primary" round @click="jump('rolelist')">返回</el-button>
      </div>

      <div class="a">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="角色名称" prop="role_name">
            <el-input v-model="ruleForm.role_name"></el-input>
          </el-form-item>

          <el-form-item label="角色名称" prop="role_describe">
            <el-input v-model="ruleForm.role_describe"></el-input>
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
import {postRolesCreateApi} from '@/api'
export default {
  data() {
    return {
      ruleForm: {
        role_name: "",
        role_describe: "",
        
      },
      rules: {
         role_name: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
        role_describe: [{ required: true, message: "请输入角色描述", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((isSuccess) => {
        if (isSuccess) {
         postRolesCreateApi(this.ruleForm)
         .then(res =>{
           if(res.meta.state === 201){
             this.$message.success(res.meta.msg)
             this.$router.push({path:'/rolelist'})
           }else{
             this.$message.success(res.meta.msg)
           }
         })
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