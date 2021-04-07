<template>
    <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>用户列表</span>
                <el-button style="float: right" type="primary" round @click="jump('userscreate')">创建用户</el-button>
            </div>

            <div class="filter">
                <el-input placeholder="请输入用户名" v-model="uname" type="text">
                    <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
                </el-input>

                <div class="block">
                    <el-date-picker v-model="data" type="datetimerange" range-separator="至" start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </div>

            <el-table :data="tableData2" style="width: 100%" v-loading="loading">
                <el-table-column prop="user_id" label="编号" width="100" align="center">
                </el-table-column>
                <el-table-column prop="role_name" label="所属角色" width="100" align="center">
                </el-table-column>
                <el-table-column prop="username" label="用户名" width="100" align="center">
                </el-table-column>
                <el-table-column prop="mobile_phone" label="手机号" width="100" align="center">
                </el-table-column>
                <el-table-column label="冻结" align="center" width="100">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949"
                            active-value="1" inactive-value="0"
                            @change="handleState(scope.row.state,scope.row.user_id)">
                            >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column prop="reg_time" label="注册时间"> </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" @click="dialogVisible = true" circle>分配角色</el-button>

                        <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.row.user_id)">
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 弹窗内容 -->
            <el-dialog title="角色分配" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
                <!-- <span>这是一段信息</span> -->
                <!-- 放数据 -->

                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                    class="demo-ruleForm">
                    <el-form-item label="当前账号" prop="pass">
                        <el-button disabled>扫码用户sss</el-button>
                    </el-form-item>
                    <el-form-item label="当前角色" prop="checkPass">
                        <el-tag type="info">普通用户</el-tag>
                    </el-form-item>
                    <el-form-item label="选择角色" prop="age">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                                color="#909399">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>

                <!-- 放数据 -->
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>

            <!-- 弹窗内容 -->

            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage4" :page-sizes="[5, 10, 15, 20]" :page-size="5"
                    layout="total, sizes, prev, pager, next, jumper" :total="tableData2Total">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

 <script>
//  import axios from 'axios'

// import {getUsersApi} from '@/api/index' 默认打开api下的index文件
import { getUsersApi, deleteUsersApi, putUsersStateApi } from "@/api";
export default {
    created () {
        this.initData();
    },
    input: "",
    watch: {
        data (newData) {
            console.log(newData);
            this.start_time = newData[0],
                this.end_time = newData[1],
                this.initData();
        },
    },
    methods: {
        handleState (state, user_id) {

            putUsersStateApi({
                state,
                user_id
            })
                .then(res => {

                    if (res.meta.state === 200) {
                        this.$message.success(res.meta.msg)
                    } else {
                        this.$message.error(); (res.meta.msg)
                    }
                })

        },
        handleSearch () {
            this.pagenum = 1;
            this.initData();
            this.uname = ''
        },
        //初始化数据
        initData () {
            getUsersApi({
                pagenum: this.pagenum,
                pagesize: this.pagesize,
                uname: this.uname,
                start_time: this.start_time,
                end_time: this.end_time,
            }).then((res) => {
                console.log(res);
                this.tableData2 = res.data.list;
                this.tableData2Total = parseInt(res.data.total);
                this.loading = false
            });
        },
        // 编辑弹框方法
        handleDelete (id) {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                deleteUsersApi({
                    user_id: id,
                }).then((res) => {
                    console.log(res)
                    if (res.meta.state === 200) {
                        this.$message({
                            type: "success",
                            message: res.meta.msg,
                        });
                        this.initData();
                    } else {
                        this.$message({
                            type: "error",
                            message: res.meta.msg,
                        });
                    }
                });
            });
        },
        handleClose (done) {
            this.$confirm("确认关闭？")
                .then((_) => {
                    done();
                })
                .catch((_) => { });
        },
        handleSizeChange (val) {
            console.log(`每页 ${val} 条`);
            this.pagesize = val;
            this.initData();
        },
        handleCurrentChange (val) {
            console.log(`当前页: ${val}`);

            this.pagenum = val;
            this.initData();
        },
        changeDate () {
            this.start_time = this.date ? this.date[0] : "";
            this.end_time = this.date ? this.date[1] : "";
            // this.initData();
        },
    },
    data () {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("年龄不能为空"));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error("请输入数字值"));
                } else {
                    if (value < 18) {
                        callback(new Error("必须年满18岁"));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.ruleForm.checkPass !== "") {
                    this.$refs.ruleForm.validateField("checkPass");
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            //表格列表数据
            loading: true,
            pagenum: 1,
            pagesize: 5,
            uname: "",
            start_time: "",
            end_time: "",
            tableData2: [],
            tableData2Total: 0,
            data: [],
            //下拉框数据
            options: [
                {
                    value: "选项1",
                    label: "黄金糕",
                },
                {
                    value: "选项2",
                    label: "双皮奶",
                },
                {
                    value: "选项3",
                    label: "蚵仔煎",
                },
                {
                    value: "选项4",
                    label: "龙须面",
                },
                {
                    value: "选项5",
                    label: "北京烤鸭",
                },
            ],
            value: "",
            //编辑弹框数据
            ruleForm: {
                pass: "",
                checkPass: "",
                age: "",
            },
            rules: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                checkPass: [{ validator: validatePass2, trigger: "blur" }],
                age: [{ validator: checkAge, trigger: "blur" }],
            },
            //控制弹框显示隐藏
            dialogVisible: false,
            //filter
            search: "",
            date: [],
            start_time: "",
            end_time: "",
            value1: true,
            value2: true,
            //分页内容
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            tableData: [
                {
                    date: "1",
                    roles: "管理员",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                    phone: "18888888888",
                },
                {
                    date: "2",
                    roles: "管理员",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄",
                    phone: "18888888888",
                },
                {
                    date: "3",
                    roles: "管理员",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄",
                },
                {
                    date: "4",
                    roles: "管理员",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                    phone: "18888888888",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
body {
    margin: 0;
}
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

        .filter {
            margin-bottom: 20px;
            overflow: hidden;

            // 搜索框
            .el-input {
                width: 300px;
                float: left;
            }

            // 日期
            .el-date-editor {
                float: right;
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
.box-card {
    width: 480px;
}
</style>