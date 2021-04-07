<template>
    <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商品分类</span>
                <el-button style="float: right" type="primary" round @click="jump('listcreate')">创建</el-button>
            </div>

            <div class="a">
                <el-table :data="tableData2" style="width: 100%" row-key="cat_id" border lazy :load="load"
                    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
                    <el-table-column prop="cat_id" label="编号" width="180">
                    </el-table-column>
                    <el-table-column prop="cat_name" label="分类名称" width="180">
                    </el-table-column>
                    <el-table-column prop="level" label="分类层级" width="180">
                    </el-table-column>
                </el-table>
            </div>

            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage4" :page-sizes="[5, 10, 15,20]" :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>


<script>
import { getCateListApi } from "@/api";
export default {
    created () {
        this.initData();
    },
    methods: {
        initData () {
            getCateListApi({
                pagenum: this.pagenum,
                pagesize: this.pagesize,
                level: this.level,
            }).then((res) => {
                console.log(res);
                this.tableData2 = res.data.list;
                this.tableData2Total = res.data.total;
            });
        },

        load (tree, treeNode, resolve) {
            setTimeout(() => {
                resolve([
                    {
                        id: 31,
                        date: "2016-05-01",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1519 弄",
                    },
                    {
                        id: 32,
                        date: "2016-05-01",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1519 弄",
                    },
                ]);
            }, 1000);
        },
        handleSizeChange (val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange (val) {
            console.log(`当前页: ${val}`);
            this.pagenum = val;
            this.initData();
        },
    },
    data () {
        return {
            children: [],
            tableData2: [],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            tableData: [
                {
                    id: 1,
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    id: 2,
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄",
                },
                {
                    id: 3,
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄",
                    children: [
                        {
                            id: 31,
                            date: "2016-05-01",
                            name: "王小虎",
                            address: "上海市普陀区金沙江路 1519 弄",
                        },
                        {
                            id: 32,
                            date: "2016-05-01",
                            name: "王小虎",
                            address: "上海市普陀区金沙江路 1519 弄",
                        },
                    ],
                },
                {
                    id: 4,
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
            ],
            tableData1: [
                {
                    id: 1,
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    id: 2,
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄",
                },
                {
                    id: 3,
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄",
                    hasChildren: true,
                },
                {
                    id: 4,
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
            ],
        };
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