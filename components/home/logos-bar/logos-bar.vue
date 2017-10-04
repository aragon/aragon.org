<template>
  <ag-section class="logos-bar">
    <h1 class="title">As seen on</h1>
    <img
      class="logos"
      src="./assets/logos.png"
      width="1111"
      alt="CoinFund, Conomi, ShapeShift, BoostVC, Wachsman PR, Novak Rutar."
    />
  </ag-section>
</template>

<script>
  import { section as agSection } from '~/toolkit'
  export default {
    components: { agSection }
  }
</script>

<style scoped>
  @import '../../../toolkit/src/shared-styles.css';
  .logos-bar {
    padding: 30px 0;
  }
  .title {
    text-align: center;
    text-transform: uppercase;
  }
  .logos {
    display: block;
    margin: 0 auto;
    width: 100%;
    mix-blend-mode: multiply;
  }
</style>
