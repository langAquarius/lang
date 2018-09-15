<template>
    <div>
        <div v-if="showList">
            <el-table 
                class="tables"
                :data="list.slice((this.currentPage-1)*10, this.currentPage*10)"stripe
                style="width: 100%">
                <el-table-column
                    prop="username"
                    label="姓名"
                    width="90">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.username }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="birthday"
                    label="出生日期"
                    width="210">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.birthday }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址"
                    width="140">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.address }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="电话"
                    width="140">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.phone }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="更改时间"
                    width="210">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="set"
                    label="编辑">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px" @click="handleEdit(scope.row.id, scope.row)">编辑</span>
                    </template>
                </el-table-column>
                <div class="block">
                <span class="demonstration">显示总数</span>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
            </el-table>
        </div>
        <div v-else>
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username" disabled></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="form.phone" disabled></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
                <el-input v-model="form.birthday"></el-input>
            </el-form-item>
            <el-form-item label="已有权限">
                <el-tag closable v-for="(item, index) in myRoler" :key="index" @close="removeTag(item, index)">{{item.rname}}</el-tag>
            </el-form-item>
            <el-form-item label="全部权限">
                <span v-for="(item, index) in allRoler" :key="index" @click="addTag(item)">
                <el-tag>{{item.rname}}</el-tag>&ensp;
                </span>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        list:[],
        showList: true,
        currentPage: 1,
        form: {},
        userInfo: {},
        roleList: [],
        allRoler: [],
        myRoler: []
      }
    },
    mounted() {
        axios.get("http://localhost:9000/userList").then(res => {
        //  console.log("res...", res);
        if (res.data.code === 0) {
            this.list = res.data.data;
            //console.log(this.list)
        } else {
            this.$alert(res.data.msg);
        }
      })
    },
    methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        }, 
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        //点击编辑
        handleEdit(id, row) {
            this.form = row;
            axios.get("http://localhost:9000/rolerList?id=" + id).then(res => {
                //console.log("res...", res);
                if (res.data.code == 0) {
                    this.allRoler = res.data.allRoler;
                    this.myRoler = res.data.myRoler;
                    this.showList = false;
                //console.log(this.allRoler)
                } else {
                    this.$alert(res.data.msg);
                }
            });   
        },
        //点击添加权限
        addTag(item) {
            // 判断用户是否有当前角色
            let index = this.myRoler.findIndex(value => {
                return value.rid == item.id;
            });
            if (index != -1) {
                this.$alert("你已有当前角色");
                return;
            }
            // 发起请求去数据库中添加角色，成功后更新前端页面
            axios.get(`http://localhost:9000/addRoler?uid=${this.form.id}&rid=${item.id}`).then(res => {
                //console.log("res...", res);
                if (res.data.code == 0) {
                    this.myRoler.push({
                    rid: item.id,
                    rname: item.rname
                    });
                } else {
                    this.$alert(res.data.msg);
                }
            });
        },
        removeTag(item, index) {
        axios.get(`http://localhost:9000/removeRoler?uid=${this.form.id}&rid=${item.rid}`).then(res => {
            //console.log("res...", res);
            if (res.data.code == 0) {
                // this.allRoler = res.data.allRoler;
                // this.myRoler = res.data.myRoler;
                // this.showList = false;
                this.myRoler.splice(index, 1);
            } else {
                this.$alert(res.data.msg);
            }
            });
        //console.log("item...", item);
        }
    },
}

</script>
<style>

</style>