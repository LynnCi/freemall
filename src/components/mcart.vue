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
                         :class="{'checked':item.checked}">
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
                          <a class="input-sub">-</a>
                          <span class="select-ipt">{{item.productNum}}</span>
                          <a class="input-add">+</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-tab-4">
                    <div class="item-price-total">￥{{item.productPrice*item.productNum}}元</div>
                  </div>
                  <div class="cart-tab-5">
                    <div class="cart-item-opration">
                      <a href="javascript:;" class="item-edit-btn">
                        <svg class="icon icon-del">
                          <use xlink:href="#icon-del"></use>
                        </svg>
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
        cartdata:[]
      }
    },
    mounted(){
      this.initCarList();
    },
    created(){

    },
    methods:{
      initCarList(){
        this.$axios({
          url:'static/cart.json',
          method:'get',
        }).then(res => {
          console.log(res)
          this.cartdata = res.data.data
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
