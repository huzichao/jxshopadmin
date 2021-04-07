<template>
  <div class="index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>角色列表</span>
        <el-button
          style="float: right"
          type="primary"
          round
          @click="jump('rolecreate')"
          >创建</el-button
        >
      </div>

      <el-table :data="tableData2" style="width: 100%" v-loading="loading" >
        <el-table-column prop="role_id" label="编号" width="60" align="center">
        </el-table-column>
        <el-table-column
          prop="role_name"
          label="角色名称"
          width="160"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="role_describe"
          label="角色描述"
          width="180"
          align="center"
        >
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="dialogVisible = true"
              >分配权限</el-button
            >
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="handleDelete(scope.row.role_id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="角色分配" :visible.sync="dialogVisible" width="50%">
        <!-- <span>这是一段信息</span> -->
        <!-- 放数据 -->
        <el-tree
          :data="data1"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps"
        >
        </el-tree>

        <!-- 放数据 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

 <script>
import { getRoleListApi, deleteRolesApi } from "@/api";
export default {
  created() {
    this.initData();
    this.loading = true;
  },
  input: "",
  methods: {
    initData() {
      getRoleListApi().then((res) => {
        this.tableData2 = res.data;
        this.loading = false;
      });
    },
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // },
    // changeDate() {
    //   this.start_time = this.date ? this.date[0] : "";
    //   this.end_time = this.date ? this.date[1] : "";
    //   // this.initData();
    // },
    //删除
    handleDelete(role_id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        console.log(role_id);
        deleteRolesApi({
          role_id,
        }).then((res) => {
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
  },
  data() {
    return {
      loading: true,
      dialogVisible: false,
      //filter
      search: "",
      data1: [
        {
          id: 1,
          label: "后台首页",
          children: [
            {
              id: 1,
              label: "欢迎页",
            },
            {
              id: 2,
              label: "访客记录",
            },
          ],
        },
        {
          id: 2,
          label: "商品分类",
          children: [
            {
              id: 3,
              label: "分类列表",
            },
            {
              id: 4,
              label: "分类创建",
            },
          ],
        },
        {
          id: 3,
          label: "商品属性",
          children: [
            {
              id: 5,
              label: "商品类型",
            },
            {
              id: 6,
              label: "商品创建",
            },
            {
              id: 7,
              label: "商品创建",
            },
            {
              id: 8,
              label: "商品创建",
            },
          ],
        },
        {
          id: 4,
          label: "商品管理",
          children: [
            {
              id: 9,
              label: "商品列表",
            },
            {
              id: 10,
              label: "商品创建",
            },
            {
              id: 11,
              label: "商品回收站",
            },
          ],
        },
        {
          id: 5,
          label: "订单管理",
          children: [
            {
              id: 12,
              label: "订单管理",
            },
            {
              id: 13,
              label: "订单回收站",
            },
            {
              id: 14,
              label: "订单统计",
            },
          ],
        },
        {
          id: 6,
          label: "用户管理",
          children: [
            {
              id: 15,
              label: "用户列表",
            },
            {
              id: 16,
              label: "用户创建",
            },
          ],
        },
        {
          id: 7,
          label: "角色管理",
          children: [
            {
              id: 17,
              label: "角色列表",
            },
            {
              id: 18,
              label: "角色创建",
            },
          ],
        },
        {
          id: 8,
          label: "权限管理",
          children: [
            {
              id: 19,
              label: "权限列表",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      date: [],
      start_time: "",
      end_time: "",
      value1: false,
      //分页内容
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData2: [],
      tableData: [
        {
          date: "111",
          roles: "呵呵",
          address: "四阿娇加哦就",
          phone: "18888888888",
        },
        {
          date: "222",
          roles: "呵呵",
          address: "四阿娇加哦就",
          phone: "18888888888",
        },
        {
          date: "333",
          roles: "呵呵",
          address: "四阿娇加哦就",
        },
        {
          date: "444",
          roles: "呵呵",
          address: "四阿娇加哦就",
          phone: "18888888888",
        },
        {
          date: "555",
          roles: "呵呵",
          address: "四阿娇加哦就",
          phone: "18888888888",
        },
        {
          date: "666",
          roles: "呵呵",
          address: "四阿娇加哦就",
          phone: "18888888888",
        },
        {
          date: "777",
          roles: "呵呵",
          address: "四阿娇加哦就",
          phone: "18888888888",
        },
        {
          date: "888",
          roles: "呵呵",
          address: "四阿娇加哦就",
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
    .el-button {
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