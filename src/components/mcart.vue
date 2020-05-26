<template>
    <div class="mcart">
      <m-header></m-header>
      <div class="main">
        <div class="nav-breadcrumb">
          <nav class="nav-breadcrumb">
            <a href="/">首页</a>
            <span>购物车</span>
          </nav>
        </div>
        <div class="cart">
          <p>我的购物车</p>
          <el-table :data="cartdata"
                    border
                    style="width:100%">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="名称">
              <template slot-scope="scope">
                {{scope.row.name}}
              </template>
            </el-table-column>
            <el-table-column prop="img" label="图片">
              <img class="itemImg" src="@/assets/images/car.png" alt="">
            </el-table-column>
            <el-table-column prop="price" label="价格">
              <template slot-scope="scope">
                {{scope.row.price}}
              </template>
            </el-table-column>
            <el-table-column prop="number" label="数量">
              <div class="number">
                <span class="subtract">-</span>
                <input type="text" class="number-inp">
                <span class="add">+</span>
              </div>
            </el-table-column>
            <el-table-column prop="allprice" label="总价格">
              <template slot-scope="scope">
                <span v-text="'¥'+scope.row.allprice"></span>
              </template>
            </el-table-column>

          </el-table>
        </div>
      </div>
      <m-footer></m-footer>
    </div>
</template>

<script>
  import mHeader from '@/components/mheader'
  import mFooter from '@/components/mfooter'

    export default {
        name: "mcart",
        components:{
            mHeader,
            mFooter
        },
        data(){
            return{
                cartdata:[
                    {
                        img:'@/assets/images/1.jpg',
                        name:'音响',
                        price:'89',
                        number:'1',
                        allprice:'89',
                    },
                    {
                        img:'@/assets/images/2.jpg',
                        name:'音响',
                        price:'40',
                        number:'2',
                        allprice:'80',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.main{
  margin-top:80px;
}
.number{
  position: relative;
  width:auto;
  background: #dddddd;
  display: inline-block;
  border: 1px solid #ddd;
}
  .number-inp{
    width:120px;
    height:30px;
    line-height: 30px;
    padding:0 40px;
    box-sizing: border-box;
    text-align: center;
    outline: none;
    border: none;
  }
  .subtract{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 38px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #ddd;
  }
  .add{
    position: absolute;
    top: 0;
    right: 0;
    width: 38px;
    height: 30px;
    line-height: 30px;
    background: #ddd;
    text-align: center;
  }
</style>
