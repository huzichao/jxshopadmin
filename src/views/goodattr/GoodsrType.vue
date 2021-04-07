<template>
  <div class="index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户列表</span>
        <el-button
          style="float: right"
          type="primary"
          round
          @click="jump('goodcreate')"
          >创建用户</el-button
        >
      </div>

      <el-table :data="tableData2" style="width: 100%">
        <el-table-column prop="cat_id" label="编号" width="100" align="center">
        </el-table-column>
        <el-table-column
          prop="cat_name"
          label="分类名称"
          width="100"
          align="center"
        >
        </el-table-column>
        <el-table-column label="状态" align="center" width="100">
          <el-switch
            v-model="value1"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @click="handleChangevalue"
          >
          </el-switch>
        </el-table-column>
        <el-table-column label="操作">
          <el-button type="primary" @click="jump('goodattr')"
            >商品属性</el-button
          >
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

 <script>
import { getGoodsListApi } from "@/api";
export default {
  created(){
    this.initData()
  },
  input: "",
  methods: {
    handleChangevalue(){},
    initData() {
      getGoodsListApi({
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      }).then(res => {
        console.log(res)
        this.tableData2 = res.data.list;
        this.tableData2Total = res.data.total;
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagenum = val
      this.initData()
    },
    changeDate() {
      this.start_time = this.date ? this.date[0] : "";
      this.end_time = this.date ? this.date[1] : "";
      // this.initData();
    },
  },
  data() {
    return {
      tableData2:[],
      //filter
      search: "",
      date: [],
      start_time: "",
      end_time: "",
      value1: false,
      //分页内容
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          date: "111",
          roles: "呵呵",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "18888888888",
        },
        {
          date: "222",
          roles: "呵呵",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          phone: "18888888888",
        },
        {
          date: "333",
          roles: "呵呵",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "444",
          roles: "呵呵",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          phone: "18888888888",
        },
        {
          date: "555",
          roles: "呵呵",
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
    .el-button {
      border-radius: 60%;
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