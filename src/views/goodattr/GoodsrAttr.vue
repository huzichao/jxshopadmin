<template>
  <div class="index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品属性</span>
      <div>
            <el-button style="float: right" type="primary" round @click="jump('goodtype')"
          >返回</el-button
        >
            <el-button style="float: right" type="primary" round @click="jump('attrcreate')"
          >创建</el-button
        >
       
      </div>
      </div>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="type" label="所属商品类型" width="100" align="center">
        </el-table-column>
         <el-table-column prop="date" label="编号" width="100" align="center">
        </el-table-column>
        <el-table-column prop="roles" label="属性名称" width="100" align="center">
        </el-table-column>
        <el-table-column prop="name" label="数量" width="100" align="center" >
        </el-table-column>
        <el-table-column prop="phone" label="录入方式" width="100" align="center">
        </el-table-column>
        <el-table-column prop="address" label="可选值" align="center"> </el-table-column>
        <el-table-column label="操作">
             <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

 <script>
export default {
  input: "",
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    changeDate() {
      this.start_time = this.date ? this.date[0] : "";
      this.end_time = this.date ? this.date[1] : "";
      // this.initData();
    },
  },
  data() {
    return {
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
          date: "1",
          roles: "尼斯",
          name: "单选属性",
          address: "",
          phone: "手工录入",
          type:"hehe"
        },
        {
          date: "2",
          roles: "尼斯",
          name: "单选属性",
          address: "",
          phone: "手工录入",
          type:"hehe"
        },
        {
          date: "3",
          roles: "尼斯",
          name: "单选属性",
          address: "",
          phone: "手工录入",
          type:"hehe"
        },
        {
          date: "4",
          roles: "尼斯",
          name: "单选属性",
          address: "",
          phone: "手工录入",
          type:"hehe"
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
      .el-button{
          margin-right: 10px;
      }
    }

    .el-button{
      border-radius: 30px;
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