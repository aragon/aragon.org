<template>
  <ag-section class="main">
    <h1 class="title">Unstoppable organizations</h1>
    <p class="subtitle">Create value without borders or intermediaries</p>
    <div class="app-wrapper">
      <img
        class="app"
        src="./assets/app-screen.svg"
        width="1140"
        height="508"
        alt="Aragon App"
      />
    </div>
  </ag-section>
</template>

<script>
  import { section } from '~/toolkit'
  export default {
    components: {
      'ag-section': section
    }
  }
</script>

<style scoped>
  @import '../../../toolkit/src/shared-styles.css';
  .main {
    padding-top: 170px;
    text-align: center;
    background-image: linear-gradient(
      130deg,
      var(--turquoise100),
      var(--white)
    );
  }
  .title {
    @apply --text-xxlarge;
    color: var(--black);
    margin-bottom: 35px;
  }
  .subtitle {
    @apply --text-large;
    margin-bottom: 15px;
  }
  .app-wrapper {
    display: flex;
    align-items: center;
  }
  .app {
    display: block;
    margin-left: 50%;
    transform: translateX(-50%);
    flex-shrink: 0;
    text-align: center;
  }
</style>
