import axios from 'axios'
import qs from 'qs'
import VueRouter from 'vue-router';

axios.defaults.baseURL = 'http://kg.zhaodashen.cn/v2/'


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    config.headers['token'] = localStorage.getItem('token') || 'adf7cbdcdc62b07d94f86339e5687ca51'
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


//登陆功能      定义接口
export const postUsersLoginApi = postData => {
    return axios.post('users/login.php', qs.stringify(postData)).then(res => res.data)
}



//商品分类
export const getCateListApi = params => {
    return axios.get('cate/index.php', { params }).then(res => res.data)
}


//订单管理

export const getOrdersListApi = params => {
    return axios.get('orders/index.php', { params }).then(res => res.data)
}



//用户列表
export const getUsersApi = params => {
    // return axios.get('http://kg.zhaodashen.cn/v2/users/index.php',{params:params,headers:{token :'asdasdada'}}).then(res => res.data)


    return axios.get('users/index.php', { params }).then(res => res.data)
}
//用户历史
export const getUserHistoryApi = params => {
    return axios.get('users/history.php', { params }).then(res => res.data)
}


//用户删除
export const deleteUsersApi = params => {
    return axios.delete('users/delete.php', { params }).then(res => res.data)
}







//角色列表
export const getRoleListApi = () => {
    return axios.get('roles/index.php').then(res => res.data)
}

//切换状态
export const putUsersStateApi = postData => {
    return axios.put('users/state.php', qs.stringify(postData)).then(res => res.data)
}

//删除
export const deleteRolesApi = params => {
    return axios.delete('roles/delete.php', { params }).then(res => res.data)
}

//添加
export const postRolesCreateApi = params => {     //params => {role_name,role_describe}
    return axios.post('roles/create.php', qs.stringify(params)).then(res => res.data)
}



//权限列表
export const getPowerListApi = () => {
    return axios.get('auth/index.php').then(res => res.data)
}

//商品属性
export const getGoodsListApi = params => {
    return axios.get('goods/type/index.php').then(res => res.data)
}