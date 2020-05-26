<template>
  <div class="top">
    <div class="left">
      <img class="logo" src="@/assets/images/logo.png" alt="">
      <span class="logo-txt">Freemall</span>
    </div>
    <div class="right">
      <img class="car-logo" src="@/assets/images/car.png" alt="">
      <span class="car-logo-txt">LynnCi</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mheader"
    }
</script>

<style scoped>
  .top{
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:80px;
    line-height: 80px;
    padding:0 60px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ccc;
  }
  .top .left,.top .right{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top .logo{
    width:40px;
    height:40px;
  }
  .top .logo-txt{
    font-size:16px;
    font-weight: bold;
    margin:0 15px;
    cursor:pointer;
  }
  .top .car-logo{
    width:30px;
    height:30px;
    margin:0 10px;
  }
  .top .car-logo-txt{
    font-size:14px;
    cursor:pointer;
  }
</style>
