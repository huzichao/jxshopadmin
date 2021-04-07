<template>
  <div class="goods">
    <!-- 卡片 -->
    <el-card class="box-card">
      <!--  头部  -->
      <div slot="header" class="clearfix header">
        <span>请输入商品名</span>
        <el-button type="primary" round>创建</el-button>
      </div>
      <!--  /头部  -->
      <!-- 搜索框与日期选择 -->
      <div class="features">
        <div class="filter">
          <el-input v-model="input" placeholder="请输入商品名"></el-input>
          <el-button icon="el-icon-search"></el-button>
        </div>
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <!-- /搜索框与日期选择 -->
      <!-- 表格 -->
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="编号" width="50">
        </el-table-column>
        <!-- <el-table-column prop="name" label="分类名称" width="100">
        </el-table-column> -->
        <el-table-column prop="province" label="图片" width="100">
        </el-table-column>
        <el-table-column prop="city" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="address" label="库存" width="80">
        </el-table-column>
        <el-table-column prop="zip" label="价格" width="90"> </el-table-column>
        <el-table-column prop="zip" label="促销价" width="90"> </el-table-column>
        <el-table-column prop="zip" label="创建于" width="180"> </el-table-column>
        <el-table-column prop="zip" label="上架" width="61">
            <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </el-table-column>
        <el-table-column prop="zip" label="热卖" width="61">
            <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-table-column>
        <el-table-column prop="zip" label="推荐" width="61">
            <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-table-column>
        <el-table-column prop="zip" label="新品" width="100">
            <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-table-column>
        <!-- <el-table-column fixed="right" label="操作" width="120">
           <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-table-column> -->
      </el-table>

      <!-- /表格 -->
      <!-- 分页 -->
      <div class="pagination">
        <!-- <span class="demonstration">完整功能</span> -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1000"
        >
        </el-pagination>
      </div>
      <!-- /分页 -->
    </el-card>
    <!-- /卡片 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      value1: "",
    //value1: true,
      value2: false,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang='scss' scoped>
.admin {
  width: 100%;
  //   .el-card::after{content:""; display: block; clear:both;}
  .el-card {
    width: 100%;
    .features {
      display: flex;
      justify-content: space-between;
      .filter {
        float: left;
        margin-bottom: 20px;
        .el-input {
          width: 243px;
          height: 40px;
          border-right: none;
        }
        .el-button {
          background: #f5f7fa;
        }
      }
      .el-date-picker {
        float: right;
      }
    }
    .header {
      height: 21px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .pagination {
      width: 100%;
      text-align: right;
      margin-top: 10px;
      .el-pagination {
        background: #ebeef5;
        padding: 10px 10px 10px 0px;
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
</style>