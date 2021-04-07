<template>
  <div class="index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品分类</span>
        <el-button
          style="float: right"
          type="primary"
          round
          @click="jump('users')"
          >返回</el-button
        >
      </div>

      <div class="a">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账户" prop="uname">
            <el-input v-model="ruleForm.uname"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="ruleForm.pwd"></el-input>
          </el-form-item>

          <el-form-item label="密保问题">
            <el-select v-model="ruleForm.question" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                prop="question"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="密保答案" prop="answer">
            <el-input v-model="ruleForm.answer"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
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
      options: [
        {
          value: "选项1",
          label: "妈妈的名字",
        },
        {
          value: "选项2",
          label: "爸爸的名字",
        },
        {
          value: "选项3",
          label: "第一个老师",
        },
        {
          value: "选项4",
          label: "你的生日",
        },
        {
          value: "选项5",
          label: "你的年龄",
        },
      ],
      value: "",
      ruleForm: {
        uname: "",
        pwd: "",
        question: "",
        answer: "",
      },
      rules: {
        uname: [
          { required: true, message: "请输入账户", trigger: "blur" },
          { min: 2, max: 8, message: "请输入2-8个字符", trigger: "blur" },
        ],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" },
          { min: 2, max: 8, message: "请输入2-8个字符", trigger: "blur" },
        ],
        question: [
          { required: true, message: "请输入密保答案", trigger: "change" },
        ],
        answer: [
          { required: true, message: "请输入密保答案", trigger: "blur" },
          { min: 2, max: 8, message: "请输入2-8个字符", trigger: "blur" },
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