<template>
  <div class="index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>访问列表</span>
      </div>

      <div class="filter">
        <el-input placeholder="请输入用户名" v-model="uname" type="text">
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="handleSearch"
          ></el-button>
        </el-input>

        <div class="block">
          <el-date-picker
            v-model="data"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </div>
      </div>

      <el-table :data="tableData2" style="width: 100%">
        <el-table-column prop="id" label="编号" width="120" align="center">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="登陆方式"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          label="登陆城市"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="login_time"
          label="登陆时间"
          width="350"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="prev_login_time"
          label="上一次登陆时间"
          width="350"
          align="center"
        >
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
          :total="tableData2Total"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

 <script>
import { getUserHistoryApi } from "@/api";

export default {
  created() {
    this.initData();
  },
  watch: {
    data(newData) {
      console.log(newData);

      this.start_time = newData[0]
      this.end_time = newData[1]
      this.initData()
    },
  },
  input: "",
  methods: {
    handleSearch(){
      this.pagenum = 1;
      this.initData()
    },
    initData() {
      getUserHistoryApi({
        pagenum: this.pagenum,
        pagesize: this.pagesize,
        uname: this.uname,
        start_time: this.start_time,
        end_time: this.end_time,
      }).then((res) => {
        console.log(res);
        this.tableData2 = res.data.list;
        this.tableData2Total = parseInt(res.data.total);
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.initData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagenum = val;
      this.initData();
    },
    // changeDate() {
    //   this.start_time = this.date ? this.date[0] : "";
    //   this.end_time = this.date ? this.date[1] : "";
    //   // this.initData();
    // },
  },
  data() {
    return {
      pagenum: 1,
      pagesize: 5,
      uname: "",
      start_time: "",
      end_time: "",
      tableData2: [],
      tableData2Total: 0,
      uname: "",
      //filter
      
      data: '',
      //分页内容
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4:1,
      tableData: [
        {
          date: "1",
          roles: "admin",
          name: "密保",
          address: "山西 太原",
          phone: "2020-10-17 16:35",
        },
        {
          date: "2",
          roles: "admin",
          name: "密保",
          address: "山西 太原",
          phone: "2020-10-17 16:35",
        },
        {
          date: "3",
          roles: "admin",
          name: "密保",
          address: "山西 太原",
          phone: "2020-10-17 16:35",
        },
        {
          date: "4",
          roles: "admin",
          name: "密保",
          address: "山西 太原",
          phone: "2020-10-17 16:35",
        },
        {
          date: "5",
          roles: "admin",
          name: "密保",
          address: "山西 太原",
          phone: "2020-10-17 16:35",
        },
        {
          date: "6",
          roles: "admin",
          name: "密保",
          address: "山西 太原",
          phone: "2020-10-17 16:35",
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
    // .user_middle {
    //   width: 100%;
    //   display: flex;
    //   justify-content: space-between;
    //   .ss {
    //     width: 300px;
    //     display: flex;
    //     .el-button {
    //       border-radius: 0px;
    //       width: 56px;
    //       background: #f5f7fa;
    //       color: #ccc;
    //       border-top-right-radius: 3px;
    //       border-bottom-right-radius: 3px;
    //     }
    //   }
    // }
    .el-button {
      border-radius: 60%;
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