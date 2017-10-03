<template>
  <ag-section class="ready-to-try">
    <div class="in">
      <div class="content">
        <h1 class="title">Ready to try Aragon?</h1>
        <p class="subtitle">Download Aragon Alpha for macOS</p>
        <div class="buttons">
          <ag-button>Try web version</ag-button>
          <ag-button strong>Download Aragon</ag-button>
        </div>
      </div>
      <img class="illustration" src="./assets/app-screen.svg" alt="" />
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
  @import '../../../toolkit/src/shared-styles.css';
  .ready-to-try {
    padding-top: 50px;
    background-color: var(--aragonAlt);
    background-image: linear-gradient(
      130deg,
      var(--turquoise100),
      var(--aragonAlt)
    );
  }
  .in {
    display: flex;
  }
  .content {
    align-self: center;
    width: 410px;
  }
  .title {
    @apply --text-xlarge;
    color: var(--black);
  }
  .subtitle {
    font-size: 19px;
    color: var(--grey500);
  }
  .illustration {
    margin-right: -90px;
  }
  .buttons {
    margin-top: 50px;
  }
  .buttons > * {
    margin-right: 10px;
  }
</style>
