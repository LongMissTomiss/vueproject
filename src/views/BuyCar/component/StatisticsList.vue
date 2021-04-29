<template>
    <div>
        <BaseTable 
            :column="column" 
            :data="carsInfoList"
            height="500px"
            >
        </BaseTable>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="3"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total_count">
        </el-pagination>
    </div>
</template>

<script>
import BaseTable from '../../../components/BaseTable'
import linkData from '../../../link/linkData'
    export default {
        components:{
            BaseTable
        },
        data() {
            return {
              column:linkData.get("id","汽车品牌","汽车类型","汽车系列","燃油类型","省份","更新时间"),
              carsInfoList:[],
              page:1,
              per_page:50,
              ispt:0,
              total_count:0
            }
        },
        methods: {
            handleSizeChange(val){
                this.per_page = val;
                this.getList();
            },
            handleCurrentChange(val){
                this.page = val;
                this.getList();
            },
            dealData(){
                let obj = {
                    page:this.page,
                    per_page:this.per_page,
                    ispt:this.ispt
                }
                return obj;
            },
            getList(){
                this.$http.get("/api/webservice/search/vehicleList/jp/1",{params:this.dealData()}).then(res=>{
                    console.log(res);
                    if(res.status==200 && res.statusText=="OK"){
                        let allInfo = res.data || [];
                        this.carsInfoList = allInfo.data;
                        this.total_count = allInfo.total_count;
                    }
                })
            }
        },
        created(){
            this.getList();
        }
    }
</script>

<style lang="less" scoped>

</style>