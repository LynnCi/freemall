<template>
  <div>
    <m-header></m-header>
    <div class="maddress">
      <div class="address-lc">lc</div>
      <div class="address-step">stepcontent</div>
      <div class="next-step">下一步</div>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
    import mHeader from '@/components/mheader'
    import mFooter from '@/components/mfooter'
    export default {
        name: "maddress",
        components:{
            mHeader,
            mFooter
        },
    }
</script>

<style scoped>
.maddress{
  margin-top:80px;
}
</style>
