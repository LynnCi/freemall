<template>
  <div class="bottom">
    <ul>
      <li>
        <span>vue2.6开发SPA单页应用</span>
        <span class="no-border">github访问地址：
            <router-link to="https://github.com/LynnCi/freemall.git">https://github.com/LynnCi/freemall.git</router-link>
        </span>
      </li>
      <li>
        <span>关于我</span>
        <span>条款和条件</span>
        <span class="no-border">隐私政策</span>
      </li>
      <li>
        <span class="no-border">Copyright 2020 LynnCi 版权所有</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "mfooter"
    }
</script>

<style scoped>
  .bottom{
    /*position: fixed;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    padding: 20px 0;
    box-sizing: border-box;
    border-top: 1px solid #ddd;
  }
  .bottom ul li{
    display: flex;
    align-items: center;
    justify-content: center;
    height:36px;
    line-height: 36px;
  }
  .bottom ul li span{
    font-size: 14px;
    color: #999;
    display: inline-block;
    line-height: 16px;
    padding: 0 12px;
    border-right: 1px solid #999;
    cursor: pointer;
  }
  .bottom ul li span.no-border{
    border:none;
  }
</style>
