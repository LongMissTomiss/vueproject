<template>
    <div>
        <el-container>
            <el-aside width="200px">
               <el-menu
                    @select="select"
                    style="height:550px"
                    default-active="1"
                    class="el-menu-vertical-demo"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-location"></i>
                        <span slot="title">统计列表</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">详情列表</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">优惠购车</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">折扣购车</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentIndex:"0",
            }
        },
        methods: {
           select(info){
               this.currentIndex=info;
           }   
        },
    }
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #D3DCE6;
  color: #fff;
  height: 550px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  padding: 0;
}
</style>