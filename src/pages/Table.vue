<template>
    <div class="order-list-page">
        <!-- 导航栏 -->
        <div class="page-title">
            <div class="page-name">
                <span></span>
                区间模式订单
            </div>
            <!-- <div class="page-refresh" @click="refreshFun">
                <img src="../../assets/imgs/page-refresh.png" alt="">
                <span>刷新</span>    
            </div> -->
        </div>

        <!-- 正文 -->
        <div class="page-content">

            <!-- 搜索框 -->
            <div class="search-box">
                <div class="search-title">
                    <!-- <img src="../../assets/imgs/table-search.png" alt="">
                    <span>订单筛选</span> -->
                    <div class="search-title-left">
                        <!-- <img src="../../assets/imgs/table-search.png" alt=""> -->
                        <span>筛选查询</span>
                    </div>
                    <div class="search-title-right">
                        <el-button class="search-btn" @click="searchFun">搜索</el-button>
                        <el-button class="search-reset" @click="searchReset">重置</el-button>   
                    </div>
                </div>    
                <div class="search-content">
                 
                    <el-row :gutter="20" >
                        <el-col :span="4">
                           <div class="search-item">
                                <div class="search-item-label">手机号码</div>
                                <el-input placeholder="手机号码" v-model="search_query.user_phone"></el-input>
                            </div>
                        </el-col>

                        <el-col :span="4">
                            <div class="search-item">
                                <div class="search-item-label">真实姓名</div>
                                <el-input placeholder="真实姓名" v-model="search_query.true_name"></el-input>
                            </div>
                        </el-col>
                     
                        <el-col :span="4">
                            <div class="search-item">
                                <div class="search-item-label">中奖结果</div>
                                <el-select v-model="search_query.is_win" placeholder="请选择">
                                    <el-option v-for="item in isWinOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                            </div> 
                        </el-col>

                        <el-col :span="8">
                            <div class="search-item">
                                <div class="search-item-label">发布时间</div>
                                <el-date-picker v-model="search_query.time" @change="timeChange" type="daterange"  align="right" unlink-panels :picker-options="pickerOptions" value-format="yyyy-MM-dd" start-placeholder="开始日期" end-placeholder="结束日期" :default-value="default_time"></el-date-picker>
                            </div>
                        </el-col>

                    
                        
                    </el-row> 
                  
                </div> 
            </div>

            <!-- 列表 -->
            <div class="table-box">
                <div class="table-title">
                    <!-- <img src="../../assets/imgs/table-list.png" alt=""> -->
                    <span>区间模式订单列表</span>
                </div>
                <template>
                    <el-table stripe v-loading="loading" :data="list" border style="width: 100%">
                        <el-table-column prop="order_id" label="订单编号"></el-table-column>
                        <el-table-column prop="true_name" label="真实姓名"></el-table-column>
                        <el-table-column prop="user_phone" label="手机号码" width="120"></el-table-column>
                        <el-table-column prop="style" label="竞猜类型">
                            <template slot-scope="row_data">
                                <span v-if="row_data.row.style == 1">看涨</span>
                                <span v-if="row_data.row.style == 2">看跌</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="order_fee" label="竞猜总额"></el-table-column>
                        <el-table-column prop="btc_point" label="止盈/止损"></el-table-column>
                        <el-table-column prop="buy_quiz" label="竞猜数量"></el-table-column>
                        <el-table-column prop="buy_price" label="下单时价"></el-table-column>
                        <el-table-column prop="sx_fee" label="手续费"></el-table-column>
                        <el-table-column prop="lucky_number" label="幸运数"></el-table-column>
                        <el-table-column prop="lucky_usdt" label="幸运奖金"></el-table-column>
                        <el-table-column prop="add_time" label="下单时间" width="180"></el-table-column>
                        <el-table-column prop="end_time" label="结算时间" width="180"></el-table-column>
                        <el-table-column prop="is_win" label="开奖结果">
                            <template slot-scope="row_data">
                                <span v-if="row_data.row.is_win == 0">未开奖</span>
                                <span v-if="row_data.row.is_win == 1">盈</span>
                                <span v-if="row_data.row.is_win == 2">亏</span>
                                <!-- <span v-if="row_data.row.is_win == 3">无效订单</span> -->
                            </template>   
                        </el-table-column>
                        <el-table-column prop="win_price" label="中奖金额"></el-table-column>
                        <el-table-column prop="invite_user_name" label="邀请人"></el-table-column>
                        <el-table-column prop="invite_user_group" label="邀请人分组"></el-table-column>
                    </el-table>
                </template>
            </div>
            <!-- 分页 -->
            <div class="page-box">
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total_num"></el-pagination>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data(){
        return{
            list:[],
            currentPage:1,
            pageSize:10,
            total_num:0,
            search_query:{
                time:'',
                start_time:'',
                end_time:'',
                user_phone:'',
                true_name:'',
                is_win:''
            },
            loading:false,
            default_time:'',
            isWinOptions:[
                { value: '',label: '全部'},
                { value: '0',label: '未开奖'},
                { value: '1',label: '盈'},
                { value: '2',label: '亏'},
            ],
            count_data:{
                bonus:'',
                lucky_usdt:'',
                usdt_fee:'',
                win_price:''
            },

            pickerOptions: {
                shortcuts: [
                    {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }

                    }, 
                    {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, 
                    {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }
                ]
            },
        }
    },
    created(){
        this.default_time = this.timeFormat(new Date().getTime(),"YMD");
       

    },
    methods:{
         //格式化时间
    timeFormat(timestamp,type){
        // let timestamp = parseInt(val) * 1000;
        let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let year = date.getFullYear();
        let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        //return hour + ":" + minute;
        //return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;

        if(type == 'YMD'){
            return year + "-" + month + "-" + day;
        }else{
            return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;    
        }
    },
        //选择时间
        timeChange(){
           

            if(this.search_query.time){
                this.search_query.start_time = this.search_query.time[0];
                this.search_query.end_time = this.search_query.time[1];
            }else{
                this.search_query.start_time = '';
                this.search_query.end_time = '';    
            }

        },
        //搜索重置
        searchReset(){
            this.search_query = {
                time:'',
                start_time:'',
                end_time:'',
                user_phone:'',
                true_name:'',
                is_win:''
            }   
        },
        //搜索
        searchFun(){
            this.currentPage = 1; 
            
            this.getList();
        },
        //获取列表
        getList(){
            

        },
         //改变每页条数
        handleSizeChange(e) {
          

            this.currentPage = 1;

           

            this.pageSize = e;
            this.getList();
        },
        //改变页数
        handleCurrentChange(e) {
           

            this.currentPage = e;
             
            this.getList();
        },
    }
}
</script>


<style lang="scss" scoped>
     // 导航栏
    .page-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 80px;
        background: #fff;
        margin-bottom: 30px;
    }
    .page-name{
		font-size:16px;
		font-weight: bold; 
		color:#151515;
		position: relative;
		padding-left:10px;
	}
	.page-name span{
		position:absolute;
		width:4px;
		height:80%;
		top:50%;
		left:0;
		background: #3D64F0;
		transform: translateY(-50%);
	}
    .page-refresh{
        display: flex;
        align-items: center;
        font-size:14px;
        color:#585858;
        border:1px solid #EBEEF5;
        padding:5px 15px;
        cursor: pointer;
        border-radius: 5px;
    }
    .page-refresh img{
        width:18px;
        margin-right:10px;
    }
    .page-content{
        padding:0 80px 80px;
    }

    //搜索
    .search-box{
        margin-bottom: 30px;
        background: #fff;
    }
    .search-title{
        padding:15px;
        // background: #E9EEF3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #EBEEF5;
    }
    .search-title-left{
        display: flex;
        align-items: center;    
    }
    .search-title-left img{
        display: block;
        width:18px;
        margin-right:16px;
    }
    .search-title-left span{
        font-size:16px;
        font-weight: bold;
        color:#151515;
    }
    
    .search-content{
        
        padding:30px;
    }
    // .search-item-line{
    //     display: flex;
    //     align-items: center;
    //     padding-bottom: 30px;
    // }
    
    .search-item{
        display: flex;
        align-items: center; 
        // width:300px;   
        //margin-right:30px;
    }
    .el-input{
        width:120px;
    }
    .el-select{
        width:120px;    
    }
    .el-range-editor.el-input__inner{
        width:240px;
    }
    .search-item-label{
        // padding-right:15px;
        //width:100px;
        margin-right:20px;
        font-size:14px;
        color:#151515;
        // width:60px;
    }
    .el-button{
        
    }
    .search-btn{
        background: #3D64F0;
        color:#fff;
    }
    .search-reset{
        margin-left:30px;
    }
    //表格
     .table-title{
        padding:15px;
        background: #fff;
        display: flex;
        align-items: center;
        border-left: 1px solid #EBEEF5;
        border-right: 1px solid #EBEEF5;
        border-top: 1px solid #EBEEF5;
    }
    .table-title img{
        display: block;
        width:18px;
        margin-right:16px;
    }
    .table-title span{
        font-size:16px;
        font-weight: bold;
        color:#151515;
    }
    // /deep/ .el-table thead{
    //     color:#151515;
    // }
    /deep/ .el-table thead th{
        
        background: #f5f7fa;
    }
    /deep/ .el-table .cell{
        text-align: center;
    }
    //启用/停封
    .deleted-box{
        position: relative;
        cursor: pointer;
    }
    .deleted-shadow{
        position: absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        z-index:19;
    }
    //操作
    .operation-box{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .operation-box span{
        cursor: pointer;
        color: #3D64F0;
        padding:0 10px;
    }
    //分页
    .page-box{
        text-align: right;
        padding:30px;
        background: #fff;
        border-left: 1px solid #EBEEF5;
        border-right: 1px solid #EBEEF5;
        border-bottom: 1px solid #EBEEF5;
    }
    /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color: #3D64F0;
    }

    //统计数据
    .first-line-title{
		font-size:16px;
		color:#151515;
		font-weight: bold;
		padding-bottom: 16px;
	}
	.first-line-item-box{
		background: #00A7FE;
		padding:30px;
		margin-bottom: 30px;
	}
	.first-line-item-box2{
		background: #F36673;
	}
	.first-line-item-box3{
		background: #3D64F0;
	}
	.first-line-item-box4{
		background: #21CC79;
	}
	.first-line-item-title{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 20px;
		color:#fff;
		font-size:14px;
	}
	.first-line-item-content{
		font-size:28px;
		font-weight: bold;
		color: #fff;
	}
</style>




