<template>
  <ag-section class="pre-footer" visual>
    <div class="main">
      <section class="section">
        <h1 class="title">Join the community</h1>
        <p class="desc">
          Be part of the conversation. Create value without borders or
          intermediaries.
        </p>
      </section>
      <section class="section">
        <h1 class="title">Try it out now</h1>
        <p class="desc">
          Download Aragon Alpha for macOS<br /> or try the
          <a href="">web version</a>.
        </p>
        <ag-button strong>Download Aragon Alpha for macOS</ag-button>
      </section>
    </div>
  </ag-section>
</template>

<script>
  import { section as agSection, button as agButton } from '~/toolkit'
  export default {
    components: { agSection, agButton }
  }
</script>

<style scoped>
  @import '../../toolkit/src/shared-styles.css';
  .pre-footer {
    width: 100%;
    padding: 140px 0;
    background: url(./assets/background.svg) no-repeat 50% 50%;
  }
  .pre-footer .main {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .pre-footer .section {
    width: 360px;
  }
  .pre-footer .section + .section {
    text-align: right;
  }
  .pre-footer .title {
    margin-bottom: 30px;
    color: var(--white);
    font-size: 27px;
  }
  .pre-footer .desc {
    font-size: 18px;
    margin-bottom: 30px;
    & a {
      color: var(--grey400);
    }
  }
</style>
