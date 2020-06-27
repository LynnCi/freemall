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
      <div class="container">
        <div class="cart">
          <div class="page-title-normal">
            <h2 class="page-title-h2"><span>我的购物车</span></h2>
          </div>
          <div class="item-list-wrap">
            <div class="cart-item">
              <div class="cart-item-head">
                <ul>
                  <li>商品信息</li>
                  <li>商品金额</li>
                  <li>商品数量</li>
                  <li>总金额</li>
                  <li>编辑</li>
                </ul>
              </div>
              <ul class="cart-item-list">
                <li v-for="item in cartdata">
                  <div class="cart-tab-1">
                    <div class="cart-item-check">
                      <a href="javascipt:;"
                         class="checkbox-btn item-check-btn"
                         :class="{'checked':item.checked}"
                         @click="editCart('checked',item)"
                      >
                        <svg class="icon icon-ok">
                          <use xlink:href="#icon-ok"></use>
                        </svg>
                      </a>
                    </div>
                    <div class="cart-item-pic">
                      <img :src="'src/assets/images/'+item.productImage">
                    </div>
                    <div class="cart-item-title">
                      <div class="item-name">{{item.productName}}</div>
                    </div>
                  </div>
                  <div class="cart-tab-2">
                    <div class="item-price">{{item.productPrice}}</div>
                  </div>
                  <div class="cart-tab-3">
                    <div class="item-quantity">
                      <div class="select-self select-self-open">
                        <div class="select-self-area">
                          <a class="input-sub" @click="editCart('minus',item)">-</a>
                          <span class="select-ipt">{{item.productNum}}</span>
                          <a class="input-add" @click="editCart('add',item)">+</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-tab-4">
                    <div class="item-price-total">{{(item.productPrice*item.productNum) | currency}}</div>
                  </div>
                  <div class="cart-tab-5">
                    <div class="cart-item-opration">
                      <a href="javascript:;" class="item-edit-btn" @click="delCartConfirm(item)">
                        删除
<!--                        <svg class="icon icon-del">-->
<!--                          <use xlink:href="#icon-del"></use>-->
<!--                        </svg>-->
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="cart-foot-wrap">
            <div class="cart-foot-inner">
              <div class="cart-foot-l">
                <div class="item-all-check">
                  <a href="javascipt:;">
                <span class="checkbox-btn item-check-btn check">
                  <svg class="icon icon-ok">
                    <use xlink:href="#icon-ok" /></svg>
                </span>
                    <span>全选</span>
                  </a>
                </div>
              </div>
              <div class="cart-foot-r">
                <div class="item-total">
                  总价: <span class="total-price">￥89.00元</span>
                </div>
                <div class="btn-wrap">
                  <a class="btn btn--red btn--dis">结算</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <m-footer></m-footer>
    <modal :mdShow="modalConfirm" @closeModal="closeModal">
      <template v-slot:message>
        <p>你确定要删除此条数据吗？</p>
      </template>
      <template v-slot:btnGroup>
        <a class="btn btn--m" href="javascript:;" @click="deldata">确认</a>
        <a class="btn btn--m btn--red" href="javascript:;" @click="closeModal">关闭</a>
      </template>
    </modal>
  </div>
</template>

<script>
  import mHeader from '@/components/mheader'
  import mFooter from '@/components/mfooter'
  import modal from '@/components/mmodal'

  export default {
    name: "mcart",
    components:{
      mHeader,
      mFooter,
      modal
    },
    data(){
      return{
        modalConfirm:false,//弹框显式属性
        delItem:'',
        cartdata:[]
      }
    },
    mounted(){
      this.initCarList();
    },
    filters:{
      currency(value){
        if(!value) return 0.00;
        return '¥' + value.toFixed(2) + '元';//tofixed 4舍5入
      }
    },
    created(){

    },
    methods:{
      //初始化购物车列表数据
      initCarList(){
        this.$axios({
          url:'static/cart.json',
          method:'get',
        }).then(res => {
          console.log(res)
          this.cartdata = res.data.data
        })
      },
      //修改购物车数量
      editCart(type,item){
        if(type == 'add'){
          item.productNum++;
        }else if(type == 'minus'){
          item.productNum--;
        }else{
          item.checked = !item.checked
        }
      },
      //删除数据确认弹框
      delCartConfirm(item){
        this.delItem = item;
        this.modalConfirm = true;
      },
      closeModal(){
        this.modalConfirm = false;
      },
      deldata(){
        let delitem = this.delItem
        this.cartList.forEach((item,index) => {
          if(delitem.productId == item.productId){
            this.cartList(index,1)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .main{
    margin-top:80px;
  }
</style>
