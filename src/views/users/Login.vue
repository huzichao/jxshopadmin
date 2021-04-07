<template>
    <div class="login">
        <vue-particles style="position: absolute; left: 0; top: 0; width: 100%; height: 100%" color="#fff"
            :particleOpacity="0.7" :particlesNumber="60" shapeType="circle" :particleSize="4" linesColor="#fff"
            :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="2"
            :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
        </vue-particles>

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0"
            class="demo-ruleForm animated bounceInDown">
            <el-form-item>
                <h1>B2c电商管理系统</h1>
            </el-form-item>
            <el-form-item prop="question">
                <el-select v-model="ruleForm.question" placeholder="请选择密保问题">
                    <el-option v-for="item in answer" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="" prop="answer">
                <el-input type="text" placeholder="请输入密保答案" clearable v-model="ruleForm.answer" autocomplete="off"
                    prefix-icon="el-icon-key"></el-input>
            </el-form-item>
            <el-form-item label="" prop="uname">
                <el-input type="text" clearable v-model="ruleForm.uname" autocomplete="off" placeholder="请输入用户名"
                    prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pwd">
                <el-input type="password" prefix-icon="el-icon-lock" show-password placeholder="请输入密码" clearable
                    v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { postUsersLoginApi } from "@/api";
export default {
    data () {
        return {
            answer: [
                { value: "你奶奶的名字叫什么", label: "你奶奶的名字叫什么" },
                { value: "你爸爸的名字叫什么", label: "你爸爸的名字叫什么" },
                { value: "您其中一位老师的名字", label: "您其中一位老师的名字" },
            ],
            ruleForm: {
                question: "",
                uname: "",
                pwd: "",
                answer: "",
            },
            rules: {
                question: [
                    { required: true, message: "请选择密保问题", trigger: "blur" },
                ],
                answer: [
                    { required: true, message: "请输入密保答案", trigger: "blur" },
                    { min: 2, max: 8, message: "长度在2到8个字符", trigger: "blur" },
                ],
                uname: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 2, max: 12, message: "长度在2到12个字符", trigger: "blur" },
                ],
                pwd: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    { min: 2, max: 12, message: "长度在②到12个字符", trigger: "blur" },
                ],
            },
        };
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((isSuccess) => {
                if (isSuccess) {
                    postUsersLoginApi(this.ruleForm).then((res) => {
                        console.log(res);
                        if (res.meta.state === 200) {
                            localStorage.setItem('uname', res.data.uname);
                            localStorage.setItem('roleName', res.data.roleName)
                            localStorage.setItem('token', res.data.token)

                            this.$message.success(res.meta.msg);
                            this.$router.push({ path: "/" });
                        } else {
                            this.$message.success(res.meta.msg);
                        }
                    });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    background: #2d3a4b;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-form {
        width: 300px;
        height: 372px;
        // background: #fff;

        .el-select,
        .el-button {
            width: 100%;
        }
        h1 {
            text-align: center;
            color: #fff;
        }
    }
}
</style>