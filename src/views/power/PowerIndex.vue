<template>
  <div class="index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>权限列表</span>
      </div>

      <div class="a">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText">
        </el-input>

        <el-tree
          class="filter-tree"
          :data="tableData2"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree2"
        >
        </el-tree>
      </div>
    </el-card>
  </div>
</template>


<script>
import {getPowerListApi} from '@/api'
export default {
  created(){
    getPowerListApi()
    .then(res=>{
      console.log(res)
      if(res.meta.state == 200){
        this.tableData2 = res.data;
      }
    })
  },
  //树形控件
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    },
  },
  //树形控件
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.auth_name.indexOf(value) !== -1;
    },
  },
  data() {
    return {
      tableData2:[],
      //   树形控件
      filterText: "",
      data: [
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
        // label: "label",
        label:'auth_name'
      },
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