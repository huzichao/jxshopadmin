<template>
  <div class="sptypes">
    <!-- 卡片 -->
    <el-card class="box-card">
      <!--  头部  -->
      <div slot="header" class="clearfix header">
        <span>创建商品</span>
        <el-button type="primary" round @click="jump('goods')">返回</el-button>
      </div>
      <!--  /头部  -->
      <!-- 标签页 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <!-- 表单 -->
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
            class="demo-ruleForm"
          >
            <el-form-item label="商品名称" prop="name" clearable>
              <el-input
                clearable
                v-model="ruleForm.name"
                class="acc"
              ></el-input>
            </el-form-item>
            <div class="con">
              <div class="con-l">
                <el-form-item label="商品数量" prop="name" clearable>
                  <el-input clearable v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="商品价格" prop="name" clearable>
                  <el-input clearable v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="促销价" prop="name" clearable>
                  <el-input clearable v-model="ruleForm.name"></el-input>
                </el-form-item>
              </div>
              <div class="con-r">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </div>
            <el-form-item label="所属分类" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择">
                <el-option label="可爱" value="shanghai"></el-option>
                <el-option label="大肉" value="beijing"></el-option>
                <el-option label="蔬菜" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <!-- /表单 -->
        </el-tab-pane>
        <el-tab-pane label="商品描述" name="second"> 暂时不写了 </el-tab-pane>
        <el-tab-pane label="商品相册" name="third">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-tab-pane>

        <el-tab-pane label="商品属性" name="fourth">
          <div class="slec">
            <span class="tit">商品类型</span>
          <el-select v-model="ruleForm.region" placeholder="请选择商品类型">
            <el-option label="可爱" value="shanghai"></el-option>
            <el-option label="大肉" value="beijing"></el-option>
            <el-option label="蔬菜" value="beijing"></el-option>
          </el-select>
          </div>
        </el-tab-pane>
      </el-tabs>
      <!-- /标签页 -->
    </el-card>
    <!-- /卡片 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      imageUrl: "",
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入商品类型", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang='scss' scoped>
.admin {
  width: 100%;
  .el-card {
    width: 100%;
    .header {
      height: 21px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .el-tabs {
      .el-tab-pane {
        .el-form {
          padding-top: 20px;
          .el-form-item .acc {
            width: 500px;
          }
          .el-input {
            width: 305px;
          }
          .con:after {
            display: table;
            content: "";
            clear: both;
          }
          .con {
            .con-l {
              float: left;
            }
            .con-r {
              margin-left: 13px;
              float: left;
            }
          }
        }
        .slec{
          padding-top: 20px;
          .tit {
          display: inline-block;
          // width: 80px;
          height: 40px;
          line-height: 40px;
          color: #606266;
          font-size: 14px;
          padding: 20px 0 0 0 px;
          margin-left: 10px;
          margin-right: 12px;
        }
        }
       
      }
    }
  }
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
// .clearfix:before,
// .clearfix:after {
//   display: table;
//   content: "";
// }
// .clearfix:after {
//   clear: both;
// }
.box-card {
  width: 480px;
}
.avatar-uploader-icon[data-v-6176b48f] {
  border: 1px dashed #d9d9d9;
}
.avatar-uploader .el-upload {
  // border: 1px dashed red;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 160px;
  line-height: 160px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>