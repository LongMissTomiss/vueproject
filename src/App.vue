<template>
  <div>
    <el-container>
      <el-header>
        <ul class="nav">
          <li></li>
          <li 
          v-for="(item) in navList" :key="item.id"
          @click="changeTitle(item.routerPath,item.id)"
          @mouseenter="enter(item.id)"
          @mouseleave="leave"
          >
            <span :class="{'backcolor':item.id==classIndex}">{{item.title}}</span>
          </li>
        </ul>
      </el-header>
      <div style="padding-top:60px">
        <router-view></router-view>
      </div>
      
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList:[
          {title:"首页",id:1,routerPath:"/home"},
          {title:"我要买车",id:2,routerPath:"/buycar"},
          {title:"汽车服务",id:3,routerPath:"/buycar"},
          {title:"我要加盟",id:4,routerPath:"/home"},
          {title:"新闻资讯",id:5,routerPath:"/home"},
        ],
        classIndex:1
      }
    },
    methods: {
      changeTitle(path,id){
        this.classIndex = id;
        this.$router.push(path);
      },
      enter(id){
        this.classIndex =id;
      },
      leave(){
        this.classIndex=0
      }
    },
  }
</script>

<style lang="less" scoped>

.el-header {
  background-color: #545c64;
  text-align: center;
  line-height: 60px;
  padding: 0;
  width: 100%;
  position: fixed;
  left: 0;
  top:0;
}

.nav{
  display: flex;

.backcolor{
  background: #ffd04b;
}

  li{
    flex: 1;
    box-sizing: border-box;
    cursor: pointer;
    color: white;

    span{
      display: inline-block;
      height: 100%;
      padding: 0 20px;

      &:hover{
        background: #ffd04b;
      }
    }
  }
  li:last-child{
     border-right: none;
  }
  li:first-child{
    width: 200px;
    flex:none;
    background:#545c64 url("./assets/logo.jpg") no-repeat;
    background-size: 100% 100%;
  }
  
}


</style>